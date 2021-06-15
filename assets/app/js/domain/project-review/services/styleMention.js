export default function styleMentions(users, input) {
	const mentionNodes = document.querySelectorAll('.mentions .mentions__mention') || [];

	if (mentionNodes.length > 0) {
		for (let index = 0; index < mentionNodes.length; index++) {
			const mention = mentionNodes[index];

			const mentionInner = mention.innerHTML.replace('@', '').trim();
			const userOfMention = users.find((user) => user.display === mentionInner);

			mention.style.setProperty('--theme', userOfMention.userColor);

			setTimeout(function () {
				input.focus();
				input.setSelectionRange(200, -1);
			}, 1);
		}
	}
}
