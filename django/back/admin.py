from django.contrib import admin
from back.models import Ong, Voluntario, Mensagem, Evento

class Ongs(admin.ModelAdmin):
    list_display = ('id', 'nome', 'cnpj', 'email', 'telefone', 'estado', 'cidade', 'endereco', 'senha')
    list_display_links = ('id', 'nome', 'cnpj', 'email', 'telefone', 'estado', 'cidade', 'endereco', 'senha')
    search_fields = ('id', 'nome', 'cnpj', 'telefone', 'email',)

class Voluntarios(admin.ModelAdmin):
    list_display = ('id', 'nome', 'cpf', 'email', 'telefone', 'estado', 'cidade', 'endereco', 'ong')
    list_display_links = ('id', 'nome', 'cpf', 'email', 'telefone', 'estado', 'cidade', 'endereco', 'ong')
    search_fields = ('id', 'nome', 'cpf', 'telefone', 'email', 'ong',)

class Eventos(admin.ModelAdmin):
    list_display = ('id', 'data', 'hora', 'estado', 'cidade', 'endereco','ong')
    list_display_links = ('id', 'data', 'hora', 'estado', 'cidade', 'endereco','ong' )
    search_fields = ('id', 'data', 'hora', 'estado', 'cidade', 'endereco','ong')

class Mensagens(admin.ModelAdmin):
    list_display = ('id', 'mensagem','voluntario','ong')
    list_display_links = ('id', 'mensagem','voluntario','ong')
    search_fields = ('id', 'mensagem', 'voluntario', 'ong')

admin.site.register(Ong, Ongs)
admin.site.register(Voluntario, Voluntarios)
admin.site.register(Evento, Eventos)
admin.site.register(Mensagem, Mensagens)