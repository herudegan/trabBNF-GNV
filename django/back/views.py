from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from back.serializers import OngSerializer, VoluntarioSerializer, EventoSerializer, MensagemSerializer
from back.models import Ong, Voluntario, Evento, Mensagem

class OngViewSet(viewsets.ModelViewSet):
    queryset = Ong.objects.all()
    serializer_class = OngSerializer
        
    def list(self, request):
        self.queryset = Ong.objects.all()
        serializer = OngSerializer(self.queryset, many=True)
        return Response(serializer.data)
    
    def delete(self, request, id=None):
        ong = Ong.objects.filter(id=id)
        ong.delete()
        return Response(ong.data)

class VoluntarioViewSet(viewsets.ModelViewSet):
    queryset = Voluntario.objects.all()
    serializer_class = VoluntarioSerializer
        
    def list(self, request):
        self.queryset = Voluntario.objects.all()
        serializer = VoluntarioSerializer(self.queryset, many=True)
        return Response(serializer.data)
    
    def delete(self, request, id=None):
        voluntario = Voluntario.objects.filter(id=id)
        voluntario.delete()
        return Response(voluntario.data)
    
class EventoViewSet(viewsets.ModelViewSet):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer
        
    def list(self, request):
        self.queryset = Evento.objects.all()
        serializer = EventoSerializer(self.queryset, many=True)
        return Response(serializer.data)
    
    def delete(self, request, id=None):
        evento = Evento.objects.filter(id=id)
        evento.delete()
        return Response(evento.data)
    
class MensagemViewSet(viewsets.ModelViewSet):
    queryset = Mensagem.objects.all()
    serializer_class = MensagemSerializer
        
    def list(self, request):
        self.queryset = Mensagem.objects.all()
        serializer = MensagemSerializer(self.queryset, many=True)
        return Response(serializer.data)
    
    def delete(self, request, id=None):
        mensagem = Mensagem.objects.filter(id=id)
        mensagem.delete()
        return Response(mensagem.data)

class LoginOView(generics.CreateAPIView):
    queryset = Ong.objects.all()
    serializer_class = OngSerializer

    def create(self, request, *args, **kwargs):
        email = request.data['email']
        senha = request.data['senha']
        query = self.queryset.filter(email = email, senha = senha)
        ide = Ong.objects.filter(email = email).values_list('id')
        
        if (query.first() is not None):
            return Response(status=status.HTTP_200_OK, data={ide[0][0]})
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED, data={'erro':'Usuário ou senha inválidos'})
        
class LoginVView(generics.CreateAPIView):
    queryset = Voluntario.objects.all()
    serializer_class = VoluntarioSerializer

    def create(self, request, *args, **kwargs):
        email = request.data['email']
        cpf = request.data['cpf']
        query = self.queryset.filter(email = email, cpf=cpf)
        ide = Voluntario.objects.filter(email = email).values_list('ong')

        if (query.first() is not None):
            return Response(status=status.HTTP_200_OK, data={ide[0][0]})
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED, data={'erro':'Usuário ou senha inválidos'})