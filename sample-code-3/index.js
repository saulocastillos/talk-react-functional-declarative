const Container = window.styled.div`
  margin: 0 50px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`
const Header = window.styled.div`
  height: 60px;
  width: 100%;
  border: 1px solid red;
  margin: 10px 0;
`
const SearchSection = window.styled.div`
  width: 100%;
  height: 330px;
  border: 1px solid red;
  font-size: 100px;
  display: flex;
  align-items: flex-end;
`
const SearchInput = window.styled.div`
  border: 1px solid red;
  width: 100%;
  height: 150px;
  font-size: 2rem;
`
const Filter = window.styled.div`
  width: 100%;
  height: 50px;
  border: 1px dashed red;
`
const List = window.styled.div`
  width: 100%;
  border: 1px solid green;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Card = window.styled.div`
  min-width: 260px;
  height: 300px;
  border: 1px solid red;
`
const Pagination = window.styled.div`
  width: 30%;
  height: 50px;
  align-self: center;
  border: 1px solid red;
`
const Footer = window.styled.div`
  height: 300px;
  width: 100%;
  border: 1px solid red;
`

const App = () => (
  <Container>
    <Header />
    <SearchSection>
      Marvel Character List
      <SearchInput>SearchInput</SearchInput>
    </SearchSection>
    <Filter>Filter</Filter>
    <List>
      <Card>Card 1</Card>
      <Card>Card 2</Card>
      <Card>Card 3</Card>
      <Card>Card 4</Card>
      <Card>Card 5</Card>
      <Card>Card 6</Card>
      <Card>Card 7</Card>
      <Card>Card 8</Card>
      <Card>Card 9</Card>
      <Card>Card 10</Card>
      <Card>Card 11</Card>
      <Card>Card 12</Card>
    </List>
    <Pagination>Pagination</Pagination>
    <Footer>Footer</Footer>
  </Container>
)

ReactDOM.createRoot(document.getElementById("dom-real")).render(<App />)
