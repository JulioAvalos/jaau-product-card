# jauu-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Julio Avalos

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jauu-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, isMaxCountReached, increaseBy, count, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
