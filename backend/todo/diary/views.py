from django.shortcuts import render
from django.views.generic import ListView
from .models import Card
from .serializers import CardSerializer
from rest_framework import viewsets

# Create your views here.
# class CardListView(ListView):
# 	model=Card
	
class CardAPIView(viewsets.ModelViewSet):
	serializer_class= CardSerializer
	queryset=Card.objects.all()
