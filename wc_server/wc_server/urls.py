from django.contrib import admin
from django.urls import path
from django.urls import include
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

from auth.urls import auth_router
from announcements.views import AnnouncementsViewSet
from projects.views import ProjectsViewSet


router = routers.DefaultRouter()
router.register("announcements", AnnouncementsViewSet)
router.register("projects", ProjectsViewSet)

urlpatterns = [
    path(r"admin/", admin.site.urls),
    path(r"api/v1/", include(router.urls)),

    # Auth
    path(r"api/v1/", include(auth_router.urls)),
]
