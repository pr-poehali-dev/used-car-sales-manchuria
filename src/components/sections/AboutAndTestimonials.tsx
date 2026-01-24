import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

interface AboutAndTestimonialsProps {
  testimonials: Testimonial[];
  onConsultationOpen: () => void;
}

const AboutAndTestimonials = ({
  testimonials,
  onConsultationOpen,
}: AboutAndTestimonialsProps) => {
  return (
    <>
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Почему выбирают нас
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: 'Shield',
                  title: 'Гарантия качества',
                  description:
                    'Все автомобили проходят тщательную проверку и виртуальный осмотр перед покупкой',
                },
                {
                  icon: 'Truck',
                  title: 'Доставка под ключ',
                  description:
                    'Организуем доставку, растаможку и постановку на учет. Вы получаете готовый автомобиль',
                },
                {
                  icon: 'HeadphonesIcon',
                  title: 'Полное сопровождение',
                  description:
                    'Консультируем на всех этапах: от выбора модели до получения автомобиля',
                },
                {
                  icon: 'BadgeCheck',
                  title: 'Прозрачность сделки',
                  description:
                    'Честные цены, детальные отчеты и онлайн-отслеживание статуса заказа',
                },
              ].map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon name={item.icon} className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-gray-600 text-lg">
              Более 500 довольных владельцев автомобилей из Китая
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы выбрать автомобиль?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации. Поможем подобрать
            идеальный вариант под ваши требования.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={onConsultationOpen}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              asChild
            >
              <a href="tel:+79991234567">
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (999) 123-45-67
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="container mx-auto text-center">
          <p>© 2024 АВТО-КИТАЙ.РУ. Все права защищены.</p>
          <p className="text-sm mt-2">
            Помогаем выбрать и доставить автомобили из Китая с 2020 года
          </p>
        </div>
      </footer>
    </>
  );
};

export default AboutAndTestimonials;
