import { cx } from '@emotion/css';
import { TTopProduct } from 'api/models';
import { observer } from 'mobx-react';
import { redirect } from 'utils';
import { topProductsTableStyle as style } from './top-products-table.style';

type TTopProductsTableProps = {
  products: Array<TTopProduct>;
};

const handleRowClick = (url: string) => () => {
  redirect(url);
};

function formatNumber(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export const TopProductsTable = observer(
  ({ products }: TTopProductsTableProps): JSX.Element => {
    return (
      <div className={style.wrapper}>
        <table className={style.table.wrapper}>
          <thead className={style.table.head.wrapper}>
            <tr className={style.table.head.row.wrapper}>
              <th
                className={cx(
                  style.table.head.row.cell.default,
                  style.table.head.row.cell.image
                )}></th>
              <th
                className={cx(
                  style.table.head.row.cell.default,
                  style.table.head.row.cell.title
                )}>
                Название
              </th>
              <th
                className={cx(
                  style.table.head.row.cell.default,
                  style.table.head.row.cell.newPrice
                )}>
                Новая цена
              </th>
              <th
                className={cx(
                  style.table.head.row.cell.default,
                  style.table.head.row.cell.oldPrice
                )}>
                Старая цена
              </th>
              <th
                className={cx(
                  style.table.head.row.cell.default,
                  style.table.head.row.cell.rating
                )}>
                Рейтинг
              </th>
              <th
                className={cx(
                  style.table.head.row.cell.default,
                  style.table.head.row.cell.comments
                )}>
                Комментарии
              </th>
            </tr>
          </thead>
          <tbody className={style.table.body.wrapper}>
            {products.map((product: TTopProduct) => (
              <tr
                key={product.id}
                className={style.table.body.row.wrapper}
                onClick={handleRowClick(product.url)}>
                <td
                  className={cx(
                    style.table.body.row.cell.default,
                    style.table.body.row.cell.image.wrapper
                  )}>
                  <img
                    className={style.table.body.row.cell.image.self}
                    src={product.image}
                    alt={product.title}
                  />
                </td>
                <td
                  className={cx(
                    style.table.body.row.cell.default,
                    style.table.body.row.cell.title
                  )}>
                  {product.title}
                </td>
                <td
                  className={cx(
                    style.table.body.row.cell.default,
                    style.table.body.row.cell.newPrice
                  )}>
                  {product.newPrice}
                </td>
                <td
                  className={cx(
                    style.table.body.row.cell.default,
                    style.table.body.row.cell.oldPrice
                  )}>
                  {product.oldPrice ?? '–'}
                </td>
                <td
                  className={cx(
                    style.table.body.row.cell.default,
                    style.table.body.row.cell.rating
                  )}>
                  {product.rating ?? '–'}
                </td>
                <td
                  className={cx(
                    style.table.body.row.cell.default,
                    style.table.body.row.cell.comments
                  )}>
                  {product.comments ? formatNumber(product.comments) : '–'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
);
