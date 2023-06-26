# Generated by Django 4.2.2 on 2023-06-05 18:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ongs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=50)),
                ('cnpj', models.BigIntegerField()),
                ('email', models.EmailField(max_length=254)),
                ('telefone', models.BigIntegerField()),
                ('estado', models.CharField(max_length=2)),
                ('cidade', models.CharField(max_length=30)),
                ('endereco', models.CharField(max_length=80)),
                ('senha', models.BigIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Voluntarios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=50)),
                ('cpf', models.BigIntegerField()),
                ('email', models.EmailField(max_length=254)),
                ('telefone', models.BigIntegerField()),
                ('estado', models.CharField(max_length=2)),
                ('cidade', models.CharField(max_length=30)),
                ('endereco', models.CharField(max_length=80)),
                ('ongs', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.ongs')),
            ],
        ),
    ]
