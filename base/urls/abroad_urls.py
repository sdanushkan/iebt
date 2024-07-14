from django.urls import path
from base.views import abroad_views as views

urlpatterns = [
   path('', views.getCountries , name='country-list'),
   path('testimonials/<str:page>', views.getTestimonials , name='testimonial-list'),
   path('createAbroadApplication', views.createAbroadApplication , name='abrord-application-create'),
   path('<str:slug>', views.getCountry , name='country-details'),

]
 