import { Article as ArticleItem } from "../../../components/Article";
import { Typography } from "../../../components/Typography";
import { Article } from "../../../models";
import { InfoCard } from "../OrderDetailsPage.styles";

interface ArticlesCardProps {
  articles: Article[];
}

export const ArticlesCard = ({ articles }: ArticlesCardProps) => (
  <InfoCard subtitle="Articles">
    <InfoCard.CardBody>
      {articles.map(
        ({ articleName, articleNo, articleImageUrl, quantity, price }) => (
          <ArticleItem
            key={articleNo}
            name={articleName}
            imageUrl={articleImageUrl}
            articleNo={articleNo}
            quantity={quantity}
            price={price}
          />
        )
      )}
    </InfoCard.CardBody>
  </InfoCard>
);
