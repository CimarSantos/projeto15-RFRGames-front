import Header from "../../components/Header /Header";
import { StyledHomeContainer, StyledProducts } from "./style";

export default function Home() {
    return (
        <>
            <Header />
            <StyledHomeContainer>
                <StyledProducts>
                    <h1>Teste1</h1>
                </StyledProducts>
            </StyledHomeContainer>
        </>
    );
}