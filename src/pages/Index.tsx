import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('catalog');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setIsFormOpen(false);
    setFormData({ name: '', phone: '', message: '' });
  };

  const cars = [
    {
      id: 1,
      brand: 'Toyota Camry',
      year: 2021,
      price: '2 450 000 ₽',
      priceValue: 2450000,
      mileage: '45 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/334b0cd8-748d-4681-9320-9df55590890e.jpg',
      ],
      features: ['Автомат', 'Полный привод', 'Кожаный салон'],
    },
    {
      id: 2,
      brand: 'Honda CR-V',
      year: 2022,
      price: '3 200 000 ₽',
      priceValue: 3200000,
      mileage: '28 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/e8d209d0-56ca-4280-a2aa-a44dade0ab84.jpg',
      ],
      features: ['Гибрид', 'Панорама', 'Камера 360°'],
    },
    {
      id: 3,
      brand: 'BMW X5',
      year: 2023,
      price: '5 800 000 ₽',
      priceValue: 5800000,
      mileage: '15 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/659c467d-1fb3-4073-a738-7e1e026c46cf.jpg',
      ],
      features: ['Премиум', 'Полный привод', 'Адаптивный круиз'],
    },
    {
      id: 4,
      brand: 'Mercedes-Benz E-Class',
      year: 2022,
      price: '4 900 000 ₽',
      priceValue: 4900000,
      mileage: '22 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/bcfb7756-a8b9-4b22-9b78-8492aacce68f.jpg',
      ],
      features: ['Бизнес-класс', 'Автопилот', 'Массаж сидений'],
    },
    {
      id: 5,
      brand: 'Hyundai Tucson',
      year: 2023,
      price: '2 650 000 ₽',
      priceValue: 2650000,
      mileage: '8 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/1548b581-aeed-457b-b7a0-94aff32abb54.jpg',
      ],
      features: ['Новинка', 'Экономичный', 'Подогрев руля'],
    },
    {
      id: 6,
      brand: 'Volkswagen Tiguan',
      year: 2021,
      price: '3 100 000 ₽',
      priceValue: 3100000,
      mileage: '38 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/c0b67090-d12a-44c0-b23b-954d87b0eb76.jpg',
      ],
      features: ['Турбо', 'AWD', 'Панорамная крыша'],
    },
    {
      id: 7,
      brand: 'Chery Tiggo 8 Pro',
      year: 2023,
      price: '2 290 000 ₽',
      priceValue: 2290000,
      mileage: '12 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/c7c320c7-612d-465b-9c7d-2d9bc3c6e423.jpg',
      ],
      features: ['7 мест', 'Турбо', 'Мультимедиа'],
    },
    {
      id: 8,
      brand: 'Geely Coolray',
      year: 2023,
      price: '1 850 000 ₽',
      priceValue: 1850000,
      mileage: '8 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/22b854d8-7ef1-4402-b6e8-bdac60f5419a.jpg',
      ],
      features: ['Спорт', 'Экономичный', 'Умный салон'],
    },
    {
      id: 9,
      brand: 'Haval Jolion',
      year: 2023,
      price: '1 990 000 ₽',
      priceValue: 1990000,
      mileage: '5 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/9a159f1f-5b1e-440d-86c9-f040b25efc51.jpg',
      ],
      features: ['Гибрид', 'Компактный', 'Круиз-контроль'],
    },
    {
      id: 10,
      brand: 'BYD Song Plus',
      year: 2023,
      price: '3 450 000 ₽',
      priceValue: 3450000,
      mileage: '3 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/f1284abb-6feb-47dc-be56-cb5cfabac8f9.jpg',
      ],
      features: ['Электро', 'Батарея 500 км', 'Премиум'],
    },
    {
      id: 11,
      brand: 'Changan CS75 Plus',
      year: 2023,
      price: '2 150 000 ₽',
      priceValue: 2150000,
      mileage: '10 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/5f86c9e4-969c-41f1-83a6-ff377a02a21d.jpg',
      ],
      features: ['AWD', 'Турбо 2.0', 'Кожа+Алькантара'],
    },
    {
      id: 12,
      brand: 'Li Auto L9',
      year: 2023,
      price: '4 200 000 ₽',
      priceValue: 4200000,
      mileage: '6 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/269ca5f9-4c3b-4348-a4b6-14ef5eeaca12.jpg',
      ],
      features: ['Гибрид', '6 мест', 'Умный дом на колёсах'],
    },
    {
      id: 13,
      brand: 'Xiaomi SU7',
      year: 2024,
      price: '3 800 000 ₽',
      priceValue: 3800000,
      mileage: '2 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/4a769df3-c7cc-45cf-926b-011a3bc6085f.jpg',
      ],
      features: ['Электро', 'Спортседан', 'Автопилот'],
    },
    {
      id: 14,
      brand: 'Zeekr 001',
      year: 2023,
      price: '4 500 000 ₽',
      priceValue: 4500000,
      mileage: '4 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/a75f7f09-05f4-47a9-b3da-c01ff6e9d8d5.jpg',
      ],
      features: ['Электро', 'Премиум', 'Быстрая зарядка'],
    },
    {
      id: 15,
      brand: 'Tank 300',
      year: 2023,
      price: '3 350 000 ₽',
      priceValue: 3350000,
      mileage: '9 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/b338a7a7-c678-4750-a8c2-c217aeda2c25.jpg',
      ],
      features: ['Внедорожник', 'Рамный', 'Блокировки'],
    },
    {
      id: 16,
      brand: 'Tank 500',
      year: 2023,
      price: '4 650 000 ₽',
      priceValue: 4650000,
      mileage: '7 000 км',
      images: [
        'https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/65a6bbdd-c293-4bab-9d56-49f6808014ef.jpg',
      ],
      features: ['Люкс', 'Пневмоподвеска', 'V6 3.0T'],
    },
  ];

  const testimonials = [
    {
      name: 'Алексей М.',
      text: 'Купил Toyota Camry - всё прошло отлично! Доставка точно в срок, автомобиль в идеальном состоянии.',
      rating: 5,
    },
    {
      name: 'Мария К.',
      text: 'Профессиональный подход, честные цены. Рекомендую всем, кто хочет качественный автомобиль из Китая!',
      rating: 5,
    },
    {
      name: 'Дмитрий В.',
      text: 'Виртуальный осмотр помог выбрать идеальный вариант. Спасибо команде за поддержку на всех этапах!',
      rating: 5,
    },
  ];

  const brands = useMemo(() => {
    const uniqueBrands = Array.from(new Set(cars.map(car => car.brand)));
    return ['all', ...uniqueBrands];
  }, []);

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const brandMatch = selectedBrand === 'all' || car.brand === selectedBrand;
      
      let priceMatch = true;
      if (priceRange === 'under2m') {
        priceMatch = car.priceValue < 2000000;
      } else if (priceRange === '2m-3m') {
        priceMatch = car.priceValue >= 2000000 && car.priceValue < 3000000;
      } else if (priceRange === '3m-4m') {
        priceMatch = car.priceValue >= 3000000 && car.priceValue < 4000000;
      } else if (priceRange === 'over4m') {
        priceMatch = car.priceValue >= 4000000;
      }
      
      return brandMatch && priceMatch;
    });
  }, [selectedBrand, priceRange]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold gradient-text">Авто из Маньчжурии</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['catalog', 'delivery', 'guarantee', 'reviews', 'about', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {section === 'catalog' && 'Каталог'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'guarantee' && 'Гарантия'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'about' && 'О нас'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button className="gradient-primary text-white">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Оставить заявку</DialogTitle>
                  <DialogDescription>
                    Заполните форму и мы свяжемся с вами для консультации
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Какой автомобиль вас интересует?"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-primary text-white">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                🚗 Прямые поставки из Китая
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Легковые б/у авто <br />
                <span className="gradient-text">из Маньчжурии</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Качественные автомобили с виртуальным осмотром 360°, полной гарантией и быстрой доставкой
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-primary text-white text-lg px-8" onClick={() => scrollToSection('catalog')}>
                  <Icon name="Search" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Виртуальный тур
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-gray-600">Авто в наличии</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">2 года</div>
                  <div className="text-sm text-gray-600">Гарантия</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">7-14 дней</div>
                  <div className="text-sm text-gray-600">Доставка</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/deafa282-ebc6-456a-9f07-ca01ef777b28/files/65a6bbdd-c293-4bab-9d56-49f6808014ef.jpg"
                alt="Tank 500"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              🎯 Актуальные предложения
            </Badge>
            <h3 className="text-4xl font-bold mb-4">Каталог автомобилей</h3>
            <p className="text-xl text-gray-600">Виртуальный осмотр 360° для каждого авто</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="w-full md:w-64">
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Выберите марку" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все марки</SelectItem>
                  {brands.filter(b => b !== 'all').map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full md:w-64">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Ценовой диапазон" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая цена</SelectItem>
                  <SelectItem value="under2m">До 2 млн ₽</SelectItem>
                  <SelectItem value="2m-3m">2-3 млн ₽</SelectItem>
                  <SelectItem value="3m-4m">3-4 млн ₽</SelectItem>
                  <SelectItem value="over4m">Более 4 млн ₽</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {(selectedBrand !== 'all' || priceRange !== 'all') && (
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedBrand('all');
                  setPriceRange('all');
                }}
                className="flex items-center gap-2"
              >
                <Icon name="X" size={16} />
                Сбросить фильтры
              </Button>
            )}
          </div>

          <div className="text-center mb-6 text-gray-600">
            Найдено автомобилей: <span className="font-bold text-primary">{filteredCars.length}</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img
                    src={car.images[0]}
                    alt={car.brand}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Icon name="Eye" size={16} className="text-primary" />
                    <span className="text-sm font-medium">360°</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{car.brand}</h4>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {car.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Gauge" size={16} />
                      {car.mileage}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-3xl font-bold gradient-text">{car.price}</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="gradient-primary text-white">
                          Подробнее
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Запрос информации</DialogTitle>
                          <DialogDescription>
                            Оставьте контакты, мы вышлем подробную информацию об автомобиле
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="car-name">Ваше имя</Label>
                            <Input
                              id="car-name"
                              placeholder="Введите ваше имя"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="car-phone">Телефон</Label>
                            <Input
                              id="car-phone"
                              type="tel"
                              placeholder="+7 (999) 123-45-67"
                              required
                            />
                          </div>
                          <input type="hidden" value={car.brand} />
                          <Button type="submit" className="w-full gradient-primary text-white">
                            Получить информацию
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              🚚 Логистика
            </Badge>
            <h3 className="text-4xl font-bold mb-4">Доставка и растаможка</h3>
            <p className="text-xl text-gray-600">Полный цикл — от выбора до передачи ключей</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'Search', title: 'Подбор авто', desc: 'Выбираете автомобиль из каталога с 360° осмотром' },
              { icon: 'FileCheck', title: 'Документы', desc: 'Оформляем все необходимые документы и таможню' },
              { icon: 'Truck', title: 'Доставка', desc: 'Транспортируем автомобиль за 7-14 дней' },
              { icon: 'Key', title: 'Передача', desc: 'Получаете готовый к эксплуатации автомобиль' },
            ].map((step, idx) => (
              <Card key={idx} className="text-center p-6 hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <Icon name={step.icon as any} size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantee" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                ✅ Надёжность
              </Badge>
              <h3 className="text-4xl font-bold mb-6">Гарантия качества</h3>
              <div className="space-y-4">
                {[
                  'Проверка технического состояния перед отправкой',
                  'Юридическая чистота всех автомобилей',
                  'Гарантия 2 года на все узлы и агрегаты',
                  'Бесплатное сервисное обслуживание первые 6 месяцев',
                  'Страхование на время доставки',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center gradient-primary text-white">
                <Icon name="Shield" size={48} className="mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm">Юридическая чистота</div>
              </Card>
              <Card className="p-6 text-center bg-secondary text-white">
                <Icon name="Award" size={48} className="mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">2 года</div>
                <div className="text-sm">Полная гарантия</div>
              </Card>
              <Card className="p-6 text-center bg-accent text-white">
                <Icon name="Wrench" size={48} className="mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">6 мес</div>
                <div className="text-sm">Бесплатный сервис</div>
              </Card>
              <Card className="p-6 text-center gradient-primary text-white">
                <Icon name="ThumbsUp" size={48} className="mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm">Довольных клиентов</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              ⭐ Отзывы клиентов
            </Badge>
            <h3 className="text-4xl font-bold mb-4">Что говорят наши клиенты</h3>
            <p className="text-xl text-gray-600">Более 500 довольных владельцев</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            🏢 О компании
          </Badge>
          <h3 className="text-4xl font-bold mb-6">Почему выбирают нас</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Мы работаем напрямую с дилерами и аукционами в Маньчжурии, что позволяет предлагать лучшие цены на рынке.
            Наш офис находится на границе, что ускоряет процесс доставки и растаможки.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'MapPin', title: 'Офис в Маньчжурии', desc: 'Прямая работа с поставщиками' },
              { icon: 'Users', title: '10+ лет опыта', desc: 'Тысячи довольных клиентов' },
              { icon: 'Headphones', title: '24/7 поддержка', desc: 'Всегда на связи с вами' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center">
                  <Icon name={item.icon as any} size={40} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 gradient-primary text-white">
        <div className="container mx-auto text-center">
          <Icon name="Phone" size={64} className="mx-auto mb-6" />
          <h3 className="text-4xl font-bold mb-4">Готовы выбрать свой автомобиль?</h3>
          <p className="text-xl mb-2 opacity-90">
            Свяжитесь с нами для консультации и виртуального осмотра
          </p>
          <p className="text-2xl font-semibold mb-8">
            Вячеслав Мокроусов
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <a href="tel:+79144348577">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (914) 434-85-77
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
              <a href="https://t.me/SlavaMokrousov" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} className="mr-2" />
                Telegram
              </a>
            </Button>
          </div>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" asChild>
              <a href="https://t.me/SlavaMokrousov" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={24} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" asChild>
              <a href="tel:+79144348577">
                <Icon name="Phone" size={24} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Авто из Маньчжурии. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;