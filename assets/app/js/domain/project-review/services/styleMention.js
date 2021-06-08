export default function styleMentions(users) {
	const mentionNodes = document.querySelectorAll('.mentions__mention') || [];

	for (let index = 0; index < mentionNodes.length; index++) {
		const mention = mentionNodes[index];

		const mentionInner = mention.innerHTML.replace('@', '').trim();
		const userOfMention = users.find((user) => user.display === mentionInner);

		mention.style.setProperty('--theme', userOfMention.userColor);
	}
}
