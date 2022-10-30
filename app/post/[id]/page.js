async function getDetailPost(id) {
	let detailPost = await fetch(`https://dummyjson.com/products/${id}`);
	return detailPost.json();
}

export default async function Page({ params }) {
	const detail = await getDetailPost(params.id);
	console.log({ detailProduct: detail });

	return (
		<div>
			<img src={detail.images[1]} width={400} height={400} />
			<p>Brand: {detail.brand}</p>
			<p>Series: {detail.title}</p>
			<p>Category: {detail.category}</p>
			<p>Rating: {detail.rating}</p>
			<p>Stock: {detail.stock}</p>
			<p>Price: {detail.price}</p>
			<p>Description: {detail.description}</p>
		</div>
	);
}
