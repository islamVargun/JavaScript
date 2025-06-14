class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency=";
    }

    async exchange(amount , firstCurrency , secondCurrency){
      try {
        const response = await fetch(`${this.url}${firstCurrency}`);
        if (!response.ok) {
          throw new Error('API çağrısı başarısız oldu');
        }
        const result = await response.json();
        const exchangedResult = amount * result.data[secondCurrency];
  
        return exchangedResult;
      } catch (error) {
        console.error('Hata:', error);
        throw new Error('Döviz dönüşümünde bir hata oluştu.');
      }
    }
}