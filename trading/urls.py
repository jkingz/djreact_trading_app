from django.urls import path

from trading.views import BuyViewSet, SellViewSet


urlpatterns = [
    path('', BuyViewSet.as_view({'get': 'list'}), name="buy_list"),
    path('sell/', SellViewSet.as_view({'get': 'list'}), name="sell_list")
]
