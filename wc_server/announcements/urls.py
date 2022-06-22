from django.urls import path
from django.urls import include
from rest_framework import routers

# from .views import AnnouncementsListCreateView
# from .views import AnnouncementsRetrieveUpdateDestroyView
from .views import AnnouncementsViewSet


router = routers.DefaultRouter()
router.register(r"announcements", AnnouncementsViewSet)


