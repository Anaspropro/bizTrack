import React from 'react'
import { Container, Typography, Button, Card, Section, SectionHeader } from '@/components/ui'
import { Check, Zap, Crown, Building2 } from 'lucide-react'

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '₦0',
      period: 'Free forever',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Basic sales recording',
        'Inventory tracking up to 100 items',
        'Customer database (up to 50 customers)',
        'Basic reports',
        'Mobile app access',
        'Offline mode',
      ],
      buttonText: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      icon: Crown,
      price: '₦5,000',
      period: 'per month',
      description: 'For growing businesses with advanced needs',
      features: [
        'Everything in Starter',
        'Unlimited inventory tracking',
        'Unlimited customers',
        'Advanced analytics & insights',
        'Multi-store management',
        'Staff accounts (up to 5 users)',
        'Cloud sync & backup',
        'Priority support',
      ],
      buttonText: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: Building2,
      price: 'Custom',
      period: 'per year',
      description: 'For businesses with multiple locations',
      features: [
        'Everything in Professional',
        'Unlimited staff accounts',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced security features',
        'API access',
        'Custom training sessions',
        '24/7 priority support',
      ],
      buttonText: 'Contact Sales',
      popular: false,
    },
  ]

  return (
    <Section padding='lg' className="bg-foreground">
      {/* Header */}
      <SectionHeader 
        title="Simple, Transparent Pricing" 
        subtitle='Choose the plan that fits your business needs. All plans include our core features.' 
        titleClassName='text-primary'
      />

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const IconComponent = plan.icon;
          return (
            <Card
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:shadow-xl ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "primary" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-16 text-center">
        <Typography variant="small" className="text-primary">
          All plans include a 7-day free trial • No credit card required •
          Cancel anytime
        </Typography>
        <div className="mt-6 flex flex-wrap justify-center gap-8 text-sm text-primary">
          <span>✓ Local payment support (Paystack)</span>
          <span>✓ Nigerian Naira pricing</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </Section>
  );
}

export default PricingSection