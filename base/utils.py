# myapp/utils.py

from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings


def send_custom_email(subject, to_email, context, template_name):
    html_content = render_to_string(f'email/{template_name}.html', context)
    text_content = render_to_string(f'email/{template_name}.txt', context)
    
    email = EmailMultiAlternatives(
        subject=subject,
        body=text_content,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[to_email],
    )
    email.attach_alternative(html_content, "text/html")
    email.send()
