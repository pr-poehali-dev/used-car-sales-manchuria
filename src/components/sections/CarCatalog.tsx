import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Car {
  id: number;
  brand: string;
  year: number;
  mileage: string;
  images: string[];
  features: string[];
  priceValue?: number;
}

interface CarCatalogProps {
  cars: Car[];
  selectedBrand: string;
  priceRange: string;
  onBrandChange: (brand: string) => void;
  onPriceRangeChange: (range: string) => void;
  onConsultationOpen: () => void;
}

const CarCatalog = ({
  cars,
  selectedBrand,
  priceRange,
  onBrandChange,
  onPriceRangeChange,
  onConsultationOpen,
}: CarCatalogProps) => {
  const brands = useMemo(() => {
    const uniqueBrands = Array.from(new Set(cars.map(car => car.brand)));
    return ['all', ...uniqueBrands];
  }, [cars]);

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const brandMatch = selectedBrand === 'all' || car.brand === selectedBrand;
      
      let priceMatch = true;
      if (priceRange === 'under2m') {
        priceMatch = (car.priceValue ?? 0) < 2000000;
      } else if (priceRange === '2m-3m') {
        priceMatch = (car.priceValue ?? 0) >= 2000000 && (car.priceValue ?? 0) < 3000000;
      } else if (priceRange === '3m-4m') {
        priceMatch = (car.priceValue ?? 0) >= 3000000 && (car.priceValue ?? 0) < 4000000;
      } else if (priceRange === 'over4m') {
        priceMatch = (car.priceValue ?? 0) >= 4000000;
      }
      
      return brandMatch && priceMatch;
    });
  }, [cars, selectedBrand, priceRange]);

  return (
    <section id="catalog" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наш каталог автомобилей
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Эксклюзивные модели с виртуальным осмотром и полным сопровождением
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="flex-1">
            <Select value={selectedBrand} onValueChange={onBrandChange}>
              <SelectTrigger>
                <SelectValue placeholder="Все марки" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand === 'all' ? 'Все марки' : brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Select value={priceRange} onValueChange={onPriceRangeChange}>
              <SelectTrigger>
                <SelectValue placeholder="Все цены" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все цены</SelectItem>
                <SelectItem value="under2m">До 2 млн ₽</SelectItem>
                <SelectItem value="2m-3m">2-3 млн ₽</SelectItem>
                <SelectItem value="3m-4m">3-4 млн ₽</SelectItem>
                <SelectItem value="over4m">От 4 млн ₽</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <Card
              key={car.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={car.images[0]}
                  alt={car.brand}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-blue-600 text-white">
                    {car.year} год
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-bold text-lg text-gray-900">
                  {car.brand}
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Gauge" size={16} className="mr-2 text-blue-600" />
                  {car.mileage}
                </div>
                <div className="flex flex-wrap gap-1">
                  {car.features.slice(0, 3).map((feature, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs border-blue-200 text-blue-700"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                  onClick={onConsultationOpen}
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  Узнать цену
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <p className="text-gray-600 text-lg">
              По выбранным фильтрам автомобили не найдены
            </p>
            <Button
              variant="outline"
              onClick={() => {
                onBrandChange('all');
                onPriceRangeChange('all');
              }}
              className="mt-4"
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarCatalog;
