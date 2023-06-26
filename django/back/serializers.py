from rest_framework import serializers
from back.models import Ong, Voluntario, Evento, Mensagem

class OngSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ong
        fields = ('id', 'nome', 'cnpj', 'email', 'telefone', 'estado', 'cidade', 'endereco', 'senha')

class VoluntarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voluntario
        fields = ('id', 'nome', 'cpf', 'email', 'telefone', 'estado', 'cidade', 'endereco', 'ong')
        
class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = ('id', 'ong', 'data', 'hora', 'estado', 'cidade', 'endereco')
        
class MensagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mensagem
        fields = ('id', 'ong', 'voluntario', 'mensagem')