import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/products';

const { act } = TestRenderer;

describe('ProductCard', () => {
  test('debe mostrar el componente correctamente', () => {
    const wrapper = TestRenderer.create(
      <ProductCard product={product1} className="custom-class">
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de incrementar el contador', () => {
    const wrapper = TestRenderer.create(
      <ProductCard product={product1} className="custom-class">
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
