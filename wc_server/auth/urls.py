from django.urls import path
from django.urls import include

from rest_framework.routers import SimpleRouter

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

from .views import TokenObtainPairViewSet


auth_router = SimpleRouter()
auth_router.register(r"auth", TokenObtainPairViewSet, basename="token_obtain_pair")
# auth_router.register("token/refresh", TokenObtainPairViewSet, basename="token_refresh")
# auth_router.register("token/verify", TokenObtainPairViewSet, basename="token_verify")