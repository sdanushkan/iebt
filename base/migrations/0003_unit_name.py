# Generated by Django 5.0.6 on 2024-05-18 03:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_rename_requirement_coursequalification_qualification_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='unit',
            name='name',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
    ]
