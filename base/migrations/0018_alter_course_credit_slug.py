# Generated by Django 5.0.6 on 2024-07-10 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0017_course_credit_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='credit_slug',
            field=models.SlugField(default='', max_length=200),
        ),
    ]
