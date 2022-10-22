import { VStack, Image, HStack, Box } from "@chakra-ui/react";
import { useRef } from "react";

const imageSrc = [
    `${process.env.basePath}/images/image-product-1.jpg`,
    `${process.env.basePath}/images/image-product-2.jpg`,
    `${process.env.basePath}/images/image-product-3.jpg`,
    `${process.env.basePath}/images/image-product-4.jpg`
];

type ProductImageProps = {
    showLightBox?: (idx: number) => void;
    idx: number;
};

const ProductImage = ({ showLightBox, idx }: ProductImageProps) => {
    const productImageRef = useRef<HTMLImageElement | null>(null);
    const changeProductImage = (e: React.SyntheticEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();

        const alt = (e.target as HTMLImageElement).alt;
        if (alt) {
            productImageRef.current!.src = imageSrc[+alt.substring(alt.length - 1) - 1];
        }
    }

    const onClickImage = () => {
        if (showLightBox) {
            const name = productImageRef.current!.src.split('.')[0];
            showLightBox(+name.substring(name.length - 1) - 1);
        }
    }

    return (
        <VStack spacing={6}>

            <Image ref={productImageRef} src={imageSrc[idx]} alt='image-product' w={'100%'} borderRadius='md'
                onClick={onClickImage}
                sx={{ cursor: 'pointer' }} />

            <HStack spacing={6} onMouseOver={changeProductImage} onClick={onClickImage}>
                <Box borderRadius='xl' borderWidth={3} borderColor='white'
                    _hover={{ borderColor: 'guideorange.200' }}>
                    <Image src={`${process.env.basePath}/images/image-product-1-thumbnail.jpg`} alt='image-product-1' borderRadius='lg'
                        sx={{ "&:hover": { opacity: 0.5, cursor: 'pointer' } }} />
                </Box>
                <Box borderRadius='xl' borderWidth={3} borderColor='white'
                    sx={{ "&:hover": { borderColor: 'guideorange.200' } }}>
                    <Image src={`${process.env.basePath}/images/image-product-2-thumbnail.jpg`} alt='image-product-2' borderRadius='lg'
                        sx={{ "&:hover": { opacity: 0.5, cursor: 'pointer' } }} />
                </Box>
                <Box borderRadius='xl' borderWidth={3} borderColor='white'
                    sx={{ "&:hover": { borderColor: 'guideorange.200' } }}>
                    <Image src={`${process.env.basePath}/images/image-product-3-thumbnail.jpg`} alt='image-product-3' borderRadius='lg'
                        sx={{ "&:hover": { opacity: 0.5, cursor: 'pointer' } }} />
                </Box>
                <Box borderRadius='xl' borderWidth={3} borderColor='white'
                    sx={{ "&:hover": { borderColor: 'guideorange.200' } }}>
                    <Image src={`${process.env.basePath}/images/image-product-4-thumbnail.jpg`} alt='image-product-4' borderRadius='lg'
                        sx={{ "&:hover": { opacity: 0.5, cursor: 'pointer' } }} />
                </Box>
            </HStack>
        </VStack>
    );
}

export default ProductImage;