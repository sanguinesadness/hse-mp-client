import { cx } from '@emotion/css';
import { TProductCompetitor } from 'api/models';
import { ReactComponent as CommentIcon } from 'assets/icons/comment.svg';
import { ReactComponent as StarIcon } from 'assets/icons/star.svg';
import LinesEllipsis from 'react-lines-ellipsis';
import { productCompetitorCardStyle as style } from './product-competitor-card.style';

type TProductCompetitorCardProps = {
  competitor: TProductCompetitor;
};

export const ProductCompetitorCard = ({
  competitor
}: TProductCompetitorCardProps): JSX.Element => {
  return (
    <a className={style.wrapper} href={competitor.url} target="_blank">
      <div className={style.image.wrapper}>
        <img className={style.image.self} alt="" src={competitor.image} />
      </div>
      <div className={style.price.wrapper}>
        {competitor.newPrice && (
          <span className={style.price.newPrice}>{competitor.newPrice}</span>
        )}
        {competitor.oldPrice && (
          <span className={style.price.oldPrice}>{competitor.oldPrice}</span>
        )}
      </div>
      <div className={style.title.wrapper}>
        <LinesEllipsis
          className={style.title.self}
          text={competitor.title}
          maxLine={3}
        />
      </div>
      <div className={style.ratingComments.wrapper}>
        {competitor.rating && (
          <div className={style.ratingComments.item.wrapper}>
            <StarIcon
              className={cx(
                style.ratingComments.item.icon.default,
                style.ratingComments.item.icon.rating
              )}
            />
            <span className={style.ratingComments.item.value}>
              {competitor.rating}
            </span>
          </div>
        )}
        {competitor.comments && (
          <div className={style.ratingComments.item.wrapper}>
            <CommentIcon
              className={cx(
                style.ratingComments.item.icon.default,
                style.ratingComments.item.icon.comment
              )}
            />
            <span className={style.ratingComments.item.value}>
              {competitor.comments}
            </span>
          </div>
        )}
      </div>
    </a>
  );
};
