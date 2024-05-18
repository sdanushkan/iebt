from django.urls import path
from base.views import abroad_views as views

urlpatterns = [
   path('', views.getCountries , name='country-list'),
]
