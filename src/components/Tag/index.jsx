import "../../styles/components/Tag/tag.css";
function Tag(tags) {
	return (
		<div className="lol">
			<p className="tags">{tags.tagName}</p>
		</div>
	);
}

export default Tag;
