import Image from "next/image";

import {
    ContainerCard, 
    Title,
    Text,
    ContainerScore,
    Score
} from "./style";

import star from '../../../../public/star.svg'

export default function ScoreCard() {
    return (
        <ContainerCard>
            <Title>Nota Devit</Title>
            <ContainerScore>
                <Image 
                    src={star}
                    alt="Uma estrela branca"
                />
                <Score>5.0</Score>
            </ContainerScore>
            <Text>Como manter minha nota</Text>
        </ContainerCard>
    )
}