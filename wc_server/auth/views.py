from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ViewSetMixin

from rest_framework_simplejwt.views import TokenViewBase
from .serializers import TokenObtainPairSerializer
from .serializers import TokenVerifySerializer
from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken



class TokenObtainPairViewSet(ViewSetMixin, TokenViewBase):

    def get_serializer_class(self):
        if self.action == 'token':
            return TokenObtainPairSerializer
        elif self.action == 'refresh':
            return TokenRefreshSerializer
        elif self.action == 'verify':
            return TokenVerifySerializer
        return TokenObtainPairSerializer

    @action(methods=["POST"], detail=False,
            url_path="token", url_name="token_obtain_pair")
    def token(self, request):
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])
        return Response(serializer.validated_data, status=status.HTTP_200_OK)

    @action(methods=["POST"], detail=False,
            url_path="token/refresh", url_name="token_refresh")
    def refresh(self, request):
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])
        return Response(serializer.validated_data, status=status.HTTP_200_OK)

    @action(methods=["POST"], detail=False,
            url_path="token/verify", url_name="token_verify")
    def verify(self, request):
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])
        return Response(serializer.validated_data, status=status.HTTP_200_OK)
