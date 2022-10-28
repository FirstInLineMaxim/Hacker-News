


const ListResults = ({searchResults}) => {
  const results = searchResults.map(search => <div key={hhhh} search={search}>Maxim's component</div>);

  const content = results?.length ? results : <article>No search matches</article>

  return (
    <div>{content}</div>
  )
};

export default ListResults