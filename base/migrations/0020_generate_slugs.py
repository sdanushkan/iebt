from django.db import migrations, models
from django.utils.text import slugify

def generate_slugs(apps, schema_editor):
    Course = apps.get_model('base', 'Course')
    for course in Course.objects.all():
        if not course.credit_slug:
            credit_slug = slugify(course.credit_slug)
            unique_credit_slug = credit_slug
            num = 1
            while Course.objects.filter(credit_slug=unique_credit_slug).exists():
                unique_credit_slug = f"{credit_slug}-{num}"
                num += 1
            course.slug = unique_credit_slug
            course.save()

class Migration(migrations.Migration):

    dependencies = [
        ('base', '0019_alter_course_credit_slug'),
    ]

    operations = [
        migrations.RunPython(generate_slugs),
    ]
