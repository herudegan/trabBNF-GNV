# Generated by Django 4.2.2 on 2023-06-05 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0002_rename_ongs_ong_rename_voluntarios_voluntario_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ong',
            name='senha',
            field=models.CharField(max_length=30),
        ),
    ]
