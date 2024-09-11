import { Flex } from "../Flex";
import { Typography } from "../Typography";
import { Image } from "../Image";
import {
  ArticleRoot,
  ImageContainer,
  ArticleDetails,
  PriceText,
} from "./ArticleItem.styles";

export type ArticleProps = {
  articleNo: string;
  name: string;
  quantity: number;
  price: number;
  imageUrl?: string;
};

const IMAGE_PLACEHOLDER_URL = "/images/imagePlaceholder.png";

const Article = ({
  imageUrl,
  articleNo,
  name,
  price,
  quantity,
}: ArticleProps) => {
  return (
    <ArticleRoot gap={4}>
      <ImageContainer>
        <Image src={imageUrl ?? IMAGE_PLACEHOLDER_URL} alt="" />
      </ImageContainer>
      <ArticleDetails direction="column" gap={2}>
        <Typography
          variant="caption"
          fontWeight="bold"
          color={({ common }) => common.black}
        >
          {name}
        </Typography>
        <Typography variant="caption" fontWeight="normal">
          Article number{articleNo}
        </Typography>
        <Flex justifyContent="space-between">
          <PriceText>
            {quantity} x {price} €
          </PriceText>
          <PriceText>{quantity * price} €</PriceText>
        </Flex>
      </ArticleDetails>
    </ArticleRoot>
  );
};

export default Article;
