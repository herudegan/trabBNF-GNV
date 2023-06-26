from django.db import models

class Ong(models.Model):
    nome = models.CharField(max_length=50)
    cnpj = models.BigIntegerField()
    email = models.EmailField()
    telefone = models.BigIntegerField()
    estado = models.CharField(max_length=2)
    cidade = models.CharField(max_length=30)
    endereco = models.CharField(max_length=80)
    senha = models.CharField(max_length=30)

class Voluntario(models.Model):
    nome = models.CharField(max_length=50)
    cpf = models.BigIntegerField()
    email = models.EmailField()
    telefone = models.BigIntegerField()
    estado = models.CharField(max_length=2)
    cidade = models.CharField(max_length=30)
    endereco = models.CharField(max_length=80)
    ong = models.ForeignKey(
        Ong, on_delete=models.PROTECT
    )

class Evento(models.Model):
    ong = models.ForeignKey(
        Ong, on_delete=models.PROTECT
    )
    data = models.DateField()
    hora = models.TimeField(auto_now=False, auto_now_add=False)
    estado = models.CharField(max_length=2)
    cidade = models.CharField(max_length=30)
    endereco = models.CharField(max_length=80)

class Mensagem(models.Model):
    ong = models.ForeignKey(
        Ong, on_delete=models.PROTECT
    )
    voluntario = models.ForeignKey(
        Voluntario, on_delete=models.PROTECT
    )
    mensagem = models.TextField(),