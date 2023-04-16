export const platformCard = (data) => {
  return `
      <article class="platformCard">
        <div>
            <img alt="${data.name || "platform unknow"}" src="${
    data.imageSrc
  }" height="120" width="120" alt="Game Status"/>
            <h4>${data.name}</h4>
        </div>
      </article>
      `;
};
