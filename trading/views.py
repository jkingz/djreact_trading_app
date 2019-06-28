from rest_framework import viewsets, permissions

from trading.models import Buy, Sell
from trading.serializers import BuySerializer, SellSerializer


class BuyViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = BuySerializer

    def get_queryset(self):
        return self.request.user.buy.all()

    def perform_create(self, serializer):
        serializer.save(user=self.requset.user)


class SellViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = SellSerializer

    def get_queryset(self):
        return self.request.user.buy.all()

    def perform_create(self, serializer):
        serializer.save(user=self.requset.user)
