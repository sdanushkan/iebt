# Generated by Django 5.0.7 on 2024-07-22 22:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_rename_program_course_programme_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dualqualificationcourse',
            name='slug',
            field=models.SlugField(blank=True, max_length=200, null=True),
        ),
    ]