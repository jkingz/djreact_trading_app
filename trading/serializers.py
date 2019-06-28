from rest_framework import serializers

from trading.models import Buy, Sell, Currency


class BuySerializer(serializers.ModelSerializer):

    class Meta:
        model = Buy
        fields = ('id', 'trans_date', 'ask_price',
                  'total_price', 'amount', 'currency')


class SellSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sell
        fields = ('id', 'trans_date', 'bid_price',
                  'total_price', 'amount', 'currency',)


class CurrencySerializer(serializers.ModelSerializer):

    class Meta:
        model = Currency
        fields = ('id', 'name', 'code',)
