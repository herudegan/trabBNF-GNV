from django.contrib import admin
from django.urls import path, include
from back.views import LoginOView, LoginVView, OngViewSet, VoluntarioViewSet, EventoViewSet, MensagemViewSet
from rest_framework import routers

routerO = routers.DefaultRouter()
routerO.register(r'Ong', OngViewSet, basename='/ongs/')
routerV = routers.DefaultRouter()
routerV.register(r'Voluntario', VoluntarioViewSet, basename='/voluntarios/')
routerE = routers.DefaultRouter()
routerE.register(r'Evento', EventoViewSet, basename='/eventos/')
routerH = routers.DefaultRouter()
routerH.register(r'Mensagem', MensagemViewSet, basename='/mensagens/')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ongs/', include(routerO.urls)),
    path('voluntarios/', include(routerV.urls)),
    path('eventos/', include(routerE.urls)),
    path('mensagens/', include(routerH.urls)),
    path('loginO/', LoginOView.as_view()),
    path('loginV/', LoginVView.as_view()),
]
