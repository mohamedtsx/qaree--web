import React from "react";

const PrivacyPolicyPage = () => {
	const styles = {
		container: {
			maxWidth: "1040px",
			margin: "auto",
			padding: "40px 5px",
		},
		body: {
			background: "transparent !important",
		},
		title: {
			fontFamily: "Arial !important",
			fontSize: "26px !important",
			color: "#000000 !important",
		},
		subtitle: {
			fontFamily: "Arial !important",
			color: "#595959 !important",
			fontSize: "14px !important",
		},
		heading1: {
			fontFamily: "Arial !important",
			fontSize: "19px !important",
			color: "#000000 !important",
		},
		heading2: {
			fontFamily: "Arial !important",
			fontSize: "17px !important",
			color: "#000000 !important",
		},
		bodyText: {
			color: "#595959 !important",
			fontSize: "14px !important",
			fontFamily: "Arial !important",
		},
		link: {
			color: "#3030F1 !important",
			fontSize: "14px !important",
			fontFamily: "Arial !important",
			wordBreak: "break-word !important",
		},
	};

	return (
		<div style={styles.container}>
			<style>
				{`
          [data-custom-class='body'], [data-custom-class='body'] * {
            background: transparent !important;
          }
          [data-custom-class='title'], [data-custom-class='title'] * {
            font-family: Arial !important;
            font-size: 26px !important;
            color: #000000 !important;
          }
          [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
            font-family: Arial !important;
            color: #595959 !important;
            font-size: 14px !important;
          }
          [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
            font-family: Arial !important;
            font-size: 19px !important;
            color: #000000 !important;
          }
          [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
            font-family: Arial !important;
            font-size: 17px !important;
            color: #000000 !important;
          }
          [data-custom-class='body_text'], [data-custom-class='body_text'] * {
            color: #595959 !important;
            font-size: 14px !important;
            font-family: Arial !important;
          }
          [data-custom-class='link'], [data-custom-class='link'] * {
            color: #3030F1 !important;
            font-size: 14px !important;
            font-family: Arial !important;
            word-break: break-word !important;
          }
        `}
			</style>
			<span
				style={{
					display: "block",
					margin: "0 auto 3.125rem",
					width: "11.125rem",
					height: "2.375rem",
					background:
						"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDFEMUQxIiBkPSJNNC4yODMgMjQuMTA3Yy0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY2LS43NjhoLS4wODVjLjA1Ny41MDIuMDg2Ljc5Mi4wODYuODd2Mi40MzRILjk4NXYtOC42NDhoMS4zMzJsLjIzMS43NzloLjA3NmMuMzgzLS41OTQuOTUtLjg5MiAxLjcwMi0uODkyLjcxIDAgMS4yNjQuMjc0IDEuNjY1LjgyMi40MDEuNTQ4LjYwMiAxLjMwOS42MDIgMi4yODMgMCAuNjQtLjA5NCAxLjE5OC0uMjgyIDEuNjctLjE4OC40NzMtLjQ1Ni44MzMtLjgwMyAxLjA4LS4zNDcuMjQ3LS43NTYuMzctMS4yMjUuMzd6TTMuOCAxOS4xOTNjLS40MDUgMC0uNy4xMjQtLjg4Ni4zNzMtLjE4Ny4yNDktLjI4My42Ni0uMjkgMS4yMzN2LjE3N2MwIC42NDUuMDk1IDEuMTA3LjI4NyAxLjM4Ni4xOTIuMjguNDk1LjQxOS45MS40MTkuNzM0IDAgMS4xMDEtLjYwNSAxLjEwMS0xLjgxNiAwLS41OS0uMDktMS4wMzQtLjI3LTEuMzI5LS4xODItLjI5NS0uNDY1LS40NDMtLjg1Mi0uNDQzem01LjU3IDEuNzk0YzAgLjU5NC4wOTggMS4wNDQuMjkzIDEuMzQ4LjE5Ni4zMDQuNTEzLjQ1Ny45NTQuNDU3LjQzNyAwIC43NS0uMTUyLjk0Mi0uNDU0LjE5Mi0uMzAzLjI4OC0uNzUzLjI4OC0xLjM1MSAwLS41OTUtLjA5Ny0xLjA0LS4yOS0xLjMzOC0uMTk0LS4yOTctLjUxLS40NDUtLjk1LS40NDUtLjQzOCAwLS43NTMuMTQ3LS45NDYuNDQzLS4xOTQuMjk1LS4yOS43NDItLjI5IDEuMzR6bTQuMTUzIDBjMCAuOTc3LS4yNTggMS43NDItLjc3NCAyLjI5My0uNTE1LjU1Mi0xLjIzMy44MjctMi4xNTQuODI3LS41NzYgMC0xLjA4NS0uMTI2LTEuNTI1LS4zNzhhMi41MiAyLjUyIDAgMCAxLTEuMDE1LTEuMDg4Yy0uMjM3LS40NzMtLjM1NS0xLjAyNC0uMzU1LTEuNjU0IDAtLjk4MS4yNTYtMS43NDQuNzY4LTIuMjg4LjUxMi0uNTQ1IDEuMjMyLS44MTcgMi4xNi0uODE3LjU3NiAwIDEuMDg1LjEyNiAxLjUyNS4zNzYuNDQuMjUxLjc3OS42MSAxLjAxNSAxLjA4LjIzNi40NjkuMzU1IDEuMDE5LjM1NSAxLjY0OXpNMTkuNzEgMjRsLS40NjItMi4xLS42MjMtMi42NTNoLS4wMzdMMTcuNDkzIDI0SDE1LjczbC0xLjcwOC02LjAwNWgxLjYzM2wuNjkzIDIuNjU5Yy4xMS40NzYuMjI0IDEuMTMzLjMzOCAxLjk3MWguMDMyYy4wMTUtLjI3Mi4wNzctLjcwNC4xODgtMS4yOTRsLjA4Ni0uNDU3Ljc0Mi0yLjg3OWgxLjgwNGwuNzA0IDIuODc5Yy4wMTQuMDc5LjAzNy4xOTUuMDY3LjM1YTIwLjk5OCAyMC45OTggMCAwIDEgLjE2NyAxLjAwMmMuMDIzLjE2NS4wMzYuMjk5LjA0LjM5OWguMDMyYy4wMzItLjI1OC4wOS0uNjExLjE3Mi0xLjA2LjA4Mi0uNDUuMTQxLS43NTQuMTc3LS45MTFsLjcyLTIuNjU5aDEuNjA2TDIxLjQ5NCAyNGgtMS43ODN6bTcuMDg2LTQuOTUyYy0uMzQ4IDAtLjYyLjExLS44MTcuMzMtLjE5Ny4yMi0uMzEuNTMzLS4zMzguOTM3aDIuMjk5Yy0uMDA4LS40MDQtLjExMy0uNzE3LS4zMTctLjkzNy0uMjA0LS4yMi0uNDgtLjMzLS44MjctLjMzem0uMjMgNS4wNmMtLjk2NiAwLTEuNzIyLS4yNjctMi4yNjYtLjgtLjU0NC0uNTM0LS44MTYtMS4yOS0uODE2LTIuMjY3IDAtMS4wMDcuMjUxLTEuNzg1Ljc1NC0yLjMzNC41MDMtLjU1IDEuMTk5LS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDcyLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45Mi4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em03LjI1My02LjIyNmMuMjIyIDAgLjQwNi4wMTYuNTUzLjA0OWwtLjEyNCAxLjUzNmExLjg3NyAxLjg3NyAwIDAgMC0uNDgzLS4wNTRjLS41MjMgMC0uOTMuMTM0LTEuMjIyLjQwMy0uMjkyLjI2OC0uNDM4LjY0NC0uNDM4IDEuMTI4VjI0aC0xLjYzOHYtNi4wMDVoMS4yNGwuMjQyIDEuMDFoLjA4Yy4xODctLjMzNy40MzktLjYwOC43NTYtLjgxNGExLjg2IDEuODYgMCAwIDEgMS4wMzQtLjMwOXptNC4wMjkgMS4xNjZjLS4zNDcgMC0uNjIuMTEtLjgxNy4zMy0uMTk3LjIyLS4zMS41MzMtLjMzOC45MzdoMi4yOTljLS4wMDctLjQwNC0uMTEzLS43MTctLjMxNy0uOTM3LS4yMDQtLjIyLS40OC0uMzMtLjgyNy0uMzN6bS4yMyA1LjA2Yy0uOTY2IDAtMS43MjItLjI2Ny0yLjI2Ni0uOC0uNTQ0LS41MzQtLjgxNi0xLjI5LS44MTYtMi4yNjcgMC0xLjAwNy4yNTEtMS43ODUuNzU0LTIuMzM0LjUwNC0uNTUgMS4yLS44MjUgMi4wODctLjgyNS44NDkgMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDczLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MiAwIC43MDQtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45MTkuMzJhNS43OSA1Ljc5IDAgMCAxLTEuMTkyLjEwNHptNS44MDMgMGMtLjcwNiAwLTEuMjYtLjI3NS0xLjY2My0uODIyLS40MDMtLjU0OC0uNjA0LTEuMzA3LS42MDQtMi4yNzggMC0uOTg0LjIwNS0xLjc1Mi42MTUtMi4zMDEuNDEtLjU1Ljk3NS0uODI1IDEuNjk1LS44MjUuNzU1IDAgMS4zMzIuMjk0IDEuNzI5Ljg4MWguMDU0YTYuNjk3IDYuNjk3IDAgMCAxLS4xMjQtMS4xOTh2LTEuOTIyaDEuNjQ0VjI0SDQ2LjQzbC0uMzE3LS43NzloLS4wN2MtLjM3Mi41OTEtLjk0Ljg4Ni0xLjcwMi44ODZ6bS41NzQtMS4zMDZjLjQyIDAgLjcyNi0uMTIxLjkyMS0uMzY1LjE5Ni0uMjQzLjMwMi0uNjU3LjMyLTEuMjR2LS4xNzhjMC0uNjQ0LS4xLTEuMTA2LS4yOTgtMS4zODYtLjE5OS0uMjc5LS41MjItLjQxOS0uOTctLjQxOWEuOTYyLjk2MiAwIDAgMC0uODUuNDY1Yy0uMjAzLjMxLS4zMDQuNzYtLjMwNCAxLjM1IDAgLjU5Mi4xMDIgMS4wMzUuMzA2IDEuMzMuMjA0LjI5Ni40OTYuNDQzLjg3NS40NDN6bTEwLjkyMi00LjkyYy43MDkgMCAxLjI2NC4yNzcgMS42NjUuODMuNC41NTMuNjAxIDEuMzEyLjYwMSAyLjI3NSAwIC45OTItLjIwNiAxLjc2LS42MiAyLjMwNC0uNDE0LjU0NC0uOTc3LjgxNi0xLjY5LjgxNi0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY1OS0uNzY4aC0uMTEzbC0uMjc0LjY2MWgtMS4yNTF2LTguMzU3aDEuNjM4djEuOTQ0YzAgLjI0Ny0uMDIxLjY0My0uMDY0IDEuMTg3aC4wNjRjLjM4My0uNTk0Ljk1LS44OTIgMS43MDMtLjg5MnptLS41MjcgMS4zMWMtLjQwNCAwLS43LjEyNS0uODg2LjM3NC0uMTg2LjI0OS0uMjgzLjY2LS4yOSAxLjIzM3YuMTc3YzAgLjY0NS4wOTYgMS4xMDcuMjg3IDEuMzg2LjE5Mi4yOC40OTUuNDE5LjkxLjQxOS4zMzcgMCAuNjA1LS4xNTUuODA0LS40NjUuMTk5LS4zMS4yOTgtLjc2LjI5OC0xLjM1IDAtLjU5MS0uMS0xLjAzNS0uMy0xLjMzYS45NDMuOTQzIDAgMCAwLS44MjMtLjQ0M3ptMy4xODYtMS4xOTdoMS43OTRsMS4xMzQgMy4zNzljLjA5Ni4yOTMuMTYzLjY0LjE5OCAxLjA0MmguMDMzYy4wMzktLjM3LjExNi0uNzE3LjIzLTEuMDQybDEuMTEyLTMuMzc5aDEuNzU3bC0yLjU0IDYuNzczYy0uMjM0LjYyNy0uNTY2IDEuMDk2LS45OTcgMS40MDctLjQzMi4zMTItLjkzNi40NjgtMS41MTIuNDY4LS4yODMgMC0uNTYtLjAzLS44MzMtLjA5MnYtMS4zYTIuOCAyLjggMCAwIDAgLjY0NS4wN2MuMjkgMCAuNTQzLS4wODguNzYtLjI2Ni4yMTctLjE3Ny4zODYtLjQ0NC41MDgtLjgwM2wuMDk2LS4yOTUtMi4zODUtNS45NjJ6Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMpIj4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNFMEUwRTAiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjQ3NCAxNS40NDNoNS4xNjJMMTIuNDM2IDMwLjRWMTAuMzYzaDE1LjJsLTUuMTYyIDUuMDh6Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNEMkQyRDIiIGQ9Ik0xMjEuNTQ0IDE0LjU2di0xLjcyOGg4LjI3MnYxLjcyOGgtMy4wMjRWMjRoLTIuMjR2LTkuNDRoLTMuMDA4em0xMy43NDQgOS41NjhjLTEuMjkgMC0yLjM0MS0uNDE5LTMuMTUyLTEuMjU2LS44MS0uODM3LTEuMjE2LTEuOTQ0LTEuMjE2LTMuMzJzLjQwOC0yLjQ3NyAxLjIyNC0zLjMwNGMuODE2LS44MjcgMS44NzItMS4yNCAzLjE2OC0xLjI0czIuMzYuNDAzIDMuMTkyIDEuMjA4Yy44MzIuODA1IDEuMjQ4IDEuODggMS4yNDggMy4yMjQgMCAuMzEtLjAyMS41OTctLjA2NC44NjRoLTYuNDY0Yy4wNTMuNTc2LjI2NyAxLjA0LjY0IDEuMzkyLjM3My4zNTIuODQ4LjUyOCAxLjQyNC41MjguNzc5IDAgMS4zNTUtLjMyIDEuNzI4LS45NmgyLjQzMmEzLjg5MSAzLjg5MSAwIDAgMS0xLjQ4OCAyLjA2NGMtLjczNi41MzMtMS42MjcuOC0yLjY3Mi44em0xLjQ4LTYuNjg4Yy0uNC0uMzUyLS44ODMtLjUyOC0xLjQ0OC0uNTI4cy0xLjAzNy4xNzYtMS40MTYuNTI4Yy0uMzc5LjM1Mi0uNjA1LjgyMS0uNjggMS40MDhoNC4xOTJjLS4wMzItLjU4Ny0uMjQ4LTEuMDU2LS42NDgtMS40MDh6bTcuMDE2LTIuMzA0djEuNTY4Yy41OTctMS4xMyAxLjQ2MS0xLjY5NiAyLjU5Mi0xLjY5NnYyLjMwNGgtLjU2Yy0uNjcyIDAtMS4xNzkuMTY4LTEuNTIuNTA0LS4zNDEuMzM2LS41MTIuOTE1LS41MTIgMS43MzZWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnptNi40NDggMHYxLjMyOGMuNTY1LS45NyAxLjQ4My0xLjQ1NiAyLjc1Mi0xLjQ1Ni42NzIgMCAxLjI3Mi4xNTUgMS44LjQ2NC41MjguMzEuOTM2Ljc1MiAxLjIyNCAxLjMyOC4zMS0uNTU1LjczMy0uOTkyIDEuMjcyLTEuMzEyYTMuNDg4IDMuNDg4IDAgMCAxIDEuODE2LS40OGMxLjA1NiAwIDEuOTA3LjMzIDIuNTUyLjk5Mi42NDUuNjYxLjk2OCAxLjU5Ljk2OCAyLjc4NFYyNGgtMi4yNHYtNC44OTZjMC0uNjkzLS4xNzYtMS4yMjQtLjUyOC0xLjU5Mi0uMzUyLS4zNjgtLjgzMi0uNTUyLTEuNDQtLjU1MnMtMS4wOS4xODQtMS40NDguNTUyYy0uMzU3LjM2OC0uNTM2Ljg5OS0uNTM2IDEuNTkyVjI0aC0yLjI0di00Ljg5NmMwLS42OTMtLjE3Ni0xLjIyNC0uNTI4LTEuNTkyLS4zNTItLjM2OC0uODMyLS41NTItMS40NC0uNTUycy0xLjA5LjE4NC0xLjQ0OC41NTJjLS4zNTcuMzY4LS41MzYuODk5LS41MzYgMS41OTJWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnpNMTY0LjkzNiAyNFYxMi4xNmgyLjI1NlYyNGgtMi4yNTZ6bTcuMDQtLjE2bC0zLjQ3Mi04LjcwNGgyLjUyOGwyLjI1NiA2LjMwNCAyLjM4NC02LjMwNGgyLjM1MmwtNS41MzYgMTMuMDU2aC0yLjM1MmwxLjg0LTQuMzUyeiIvPgogICAgPC9nPgo8L3N2Zz4K) no-repeat center",
				}}
			/>

			<div style={styles.title}>
				<div align="center">
					<div>
						<strong>
							<span data-custom-class="title">PRIVACY NOTICE</span>
						</strong>
					</div>
				</div>
			</div>

			<div align="center">
				<div style={{ lineHeight: "1.5" }}>
					<div style={styles.subtitle}>
						<div align="center">
							<span data-custom-class="subtitle">
								Last updated January 1, 2023
							</span>
						</div>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							This privacy notice for [Your Company Name] (doing business as
							[Your Business Name]) (&quot; <strong>Company</strong> ,&quot;
							&quot; <strong>we</strong> ,&quot; &quot; <strong>us</strong>{" "}
							,&quot; or &quot; <strong>our</strong> &quot;), describes how and
							why we might collect, store, use, and/or share (&quot;{" "}
							<strong>process</strong> &quot;) your information when you use
							(&quot; <strong>Services</strong> &quot;), such as when you:
							<ul>
								<li>
									Visit our website at [<strong>Website Name</strong>] or any
									website of ours that links to this privacy notice
								</li>
								<li>
									Engage with us in other related ways, including any sales,
									marketing, or events
								</li>
							</ul>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>Questions or concerns? </strong>Reading this privacy
							notice will help you understand your privacy rights and choices.
							If you do not agree with our policies and practices, please do not
							use our Services. If you still have any questions or concerns,
							please contact us at [<strong>Contact Email</strong>].
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div>
						<strong>
							<span data-custom-class="heading_1">SUMMARY OF KEY POINTS</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<em>
								<strong>
									This summary provides key points from our privacy notice, but
									you can find out more details about any of these topics by
									clicking the link following each key point or by using our
									table of contents below to find the section you are looking
									for. You can also click{" "}
									<a href="#toc" data-custom-class="link">
										here
									</a>{" "}
									to go directly to our table of contents.
								</strong>
							</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>What personal information do we process?</strong> When you
							visit, use, or navigate our Services, we may process personal
							information depending on how you interact with [Your Company Name]
							and the Services, the choices you make, and the products and
							features you use. Click{" "}
							<a href="#personalinfo" data-custom-class="link">
								here
							</a>{" "}
							to learn more.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>Do we process any sensitive personal information?</strong>{" "}
							We do not process sensitive personal information.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>Do we receive any information from third parties?</strong>{" "}
							We do not receive any information from third parties.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>How do we process your information?</strong> We process
							your information to provide, improve, and administer our Services,
							communicate with you, for security and fraud prevention, and to
							comply with law. We may also process your information for other
							purposes with your consent. We process your information only when
							we have a valid legal reason to do so. Click{" "}
							<a href="#infouse" data-custom-class="link">
								here
							</a>{" "}
							to learn more.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								In what situations and with which parties do we share personal
								information?
							</strong>{" "}
							We may share information in specific situations and with specific
							third parties. Click{" "}
							<a href="#whoshare" data-custom-class="link">
								here
							</a>{" "}
							to learn more.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>How do we keep your information safe?</strong> We have
							organizational and technical processes and procedures in place to
							protect your personal information. However, no electronic
							transmission over the internet or information storage technology
							can be guaranteed to be 100% secure, so we cannot promise or
							guarantee that hackers, cybercriminals, or other unauthorized
							third parties will not be able to defeat our security and
							improperly collect, access, steal, or modify your information.
							Click{" "}
							<a href="#infosafe" data-custom-class="link">
								here
							</a>{" "}
							to learn more.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>What are your privacy rights?</strong> Depending on where
							you are located geographically, the applicable privacy law may
							mean you have certain rights regarding your personal information.
							Click{" "}
							<a href="#privacyrights" data-custom-class="link">
								here
							</a>{" "}
							to learn more.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>How do you exercise your rights?</strong> The easiest way
							to exercise your rights is by filling out our data subject request
							form available here:{" "}
							<a href="URL" data-custom-class="link">
								[Your Company Contact Form]
							</a>
							, or by contacting us. We will consider and act upon any request
							in accordance with applicable data protection laws.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div>
						<strong>
							<span data-custom-class="heading_1">TABLE OF CONTENTS</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<a href="#toc" data-custom-class="link">
								1. WHAT INFORMATION DO WE COLLECT?
							</a>
							<br />
							<a href="#infouse" data-custom-class="link">
								2. HOW DO WE PROCESS YOUR INFORMATION?
							</a>
							<br />
							<a href="#whoshare" data-custom-class="link">
								3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
							</a>
							<br />
							<a href="#cookies" data-custom-class="link">
								4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
							</a>
							<br />
							<a href="#sociallogins" data-custom-class="link">
								5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
							</a>
							<br />
							<a href="#inforetain" data-custom-class="link">
								6. HOW LONG DO WE KEEP YOUR INFORMATION?
							</a>
							<br />
							<a href="#infosafe" data-custom-class="link">
								7. HOW DO WE KEEP YOUR INFORMATION SAFE?
							</a>
							<br />
							<a href="#privacyrights" data-custom-class="link">
								8. WHAT ARE YOUR PRIVACY RIGHTS?
							</a>
							<br />
							<a href="#DNT" data-custom-class="link">
								9. CONTROLS FOR DO-NOT-TRACK FEATURES
							</a>
							<br />
							<a href="#caresidents" data-custom-class="link">
								10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
							</a>
							<br />
							<a href="#policyupdates" data-custom-class="link">
								11. DO WE MAKE UPDATES TO THIS NOTICE?
							</a>
							<br />
							<a href="#contact" data-custom-class="link">
								12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
							</a>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div id="toc">
						<strong>
							<span data-custom-class="heading_1">
								1. WHAT INFORMATION DO WE COLLECT?
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading2}>
					<div>
						<strong>
							<span data-custom-class="heading_2">
								Personal information you disclose to us
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								<em>In Short:</em>
							</strong>{" "}
							<em>We collect personal information that you provide to us.</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							We collect personal information that you voluntarily provide to us
							when you express an interest in obtaining information about us or
							our products and Services, when you participate in activities on
							the Services, or otherwise when you contact us.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							The personal information that we collect depends on the context of
							your interactions with us and the Services, the choices you make,
							and the products and features you use. The personal information we
							collect may include the following:
						</span>
						<ul>
							<li>
								<span data-custom-class="body_text">
									<strong>Personal Information Provided by You.</strong> We
									collect names; phone numbers; email addresses; mailing
									addresses; job titles; usernames; passwords; contact or
									authentication data; billing addresses; and other similar
									information.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>Payment Data.</strong> We may collect data necessary
									to process your payment if you make purchases, such as your
									payment instrument number (such as a credit card number), and
									the security code associated with your payment instrument. All
									payment data is stored by our payment processor and you should
									review its privacy policies and contact the payment processor
									directly to respond to your questions.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>Social Media Login Data.</strong> We may provide you with
							the option to register with us using your existing social media
							account details, like your Facebook, Twitter, or other social
							media account. If you choose to register in this way, we will
							collect the information described in the section called &quot;{" "}
							<a href="#sociallogins" data-custom-class="link">
								HOW DO WE HANDLE YOUR SOCIAL LOGINS?
							</a>{" "}
							&quot; below.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							All personal information that you provide to us must be true,
							complete, and accurate, and you must notify us of any changes to
							such personal information.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading2}>
					<div>
						<strong>
							<span data-custom-class="heading_2">
								Information automatically collected
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div
				style={{
					lineHeight: "1.5",
				}}
			>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								<em>In Short:</em>
							</strong>{" "}
							<em>
								Some information — such as your Internet Protocol (IP) address
								and/or browser and device characteristics — is collected
								automatically when you visit our Services.
							</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							We automatically collect certain information when you visit, use,
							or navigate the Services. This information does not reveal your
							specific identity (like your name or contact information) but may
							include device and usage information, such as your IP address,
							browser and device characteristics, operating system, language
							preferences, referring URLs, device name, country, location,
							information about how and when you use our Services, and other
							technical information. This information is primarily needed to
							maintain the security and operation of our Services, and for our
							internal analytics and reporting purposes.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							Like many businesses, we also collect information through cookies
							and similar technologies.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading2}>
					<div>
						<strong>
							<span data-custom-class="heading_2">
								Information collected from other sources
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								<em>In Short:</em>
							</strong>{" "}
							<em>
								We may collect limited data from public databases, marketing
								partners, and other outside sources.
							</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							In order to enhance our ability to provide relevant marketing,
							offers, and services to you and update our records, we may obtain
							information about you from other sources, such as public
							databases, joint marketing partners, as well as from other third
							parties. This information includes mailing addresses, job titles,
							email addresses, phone numbers, intent data (or user behavior
							data), Internet Protocol (IP) addresses, social media profiles,
							social media URLs, and custom profiles, for purposes of targeted
							advertising and event promotion.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div id="infouse">
						<strong>
							<span data-custom-class="heading_1">
								2. HOW DO WE PROCESS YOUR INFORMATION?
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								<em>In Short:</em>
							</strong>{" "}
							<em>
								We process your information to provide, improve, and administer
								our Services, communicate with you, for security and fraud
								prevention, and to comply with law. We may also process your
								information for other purposes with your consent.
							</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							We process your personal information for a variety of reasons,
							depending on how you interact with our Services, including:
						</span>
						<ul>
							<li>
								<span data-custom-class="body_text">
									<strong>
										To facilitate account creation and authentication and
										otherwise manage user accounts.
									</strong>{" "}
									We may process your information so you can create and log in
									to your account, as well as keep your account in working
									order.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>
										To deliver and facilitate delivery of services to the user.
									</strong>{" "}
									We may process your information to provide you with the
									requested service.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>
										To respond to user inquiries/offer support to users.
									</strong>{" "}
									We may process your information to respond to your inquiries
									and solve any potential issues you might have with the
									requested service.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>To send administrative information to you.</strong> We
									may process your information to send you details about our
									products and services, changes to our terms and policies, and
									other similar information.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>To fulfill and manage your orders.</strong> We may
									process your information to fulfill and manage your orders,
									payments, returns, and exchanges made through the Services.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>To request feedback.</strong> We may process your
									information when necessary to request feedback and to contact
									you about your use of our Services.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>
										To send you marketing and promotional communications.
									</strong>{" "}
									We may process the personal information you send to us for our
									marketing purposes, if this is in accordance with your
									marketing preferences. You can opt out of our marketing emails
									at any time. For more information, see &quot;{" "}
									<a href="#privacyrights" data-custom-class="link">
										WHAT ARE YOUR PRIVACY RIGHTS?
									</a>{" "}
									&quot; below).
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>To deliver targeted advertising to you.</strong> We
									may process your information to develop and display
									personalized content and advertising tailored to your
									interests, location, and more. For more information see our
									Cookie Notice: [
									<a href="URL" data-custom-class="link">
										Click Here
									</a>
									].
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>To protect our Services.</strong> We may process your
									information as part of our efforts to keep our Services safe
									and secure, including fraud monitoring and prevention.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>To administer prize draws and competitions.</strong>{" "}
									We may process your information to administer prize draws and
									competitions.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>
										To evaluate and improve our Services, products, marketing,
										and your experience.
									</strong>{" "}
									We may process your information to evaluate and improve our
									Services, products, marketing, and your experience.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>To identify usage trends.</strong> We may process
									information about how you use our Services to better
									understand how they are being used so we can improve them.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>
										To determine the effectiveness of our marketing and
										promotional campaigns.
									</strong>{" "}
									We may process your information to better understand how to
									provide marketing and promotional campaigns that are most
									relevant to you.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>To comply with our legal obligations.</strong> We may
									process your information to comply with our legal obligations,
									respond to legal requests, and prevent harm.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div id="whoshare">
						<strong>
							<span data-custom-class="heading_1">
								3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								<em>In Short:</em>
							</strong>{" "}
							<em>
								We may share information in specific situations described in
								this section and/or with the following third parties.
							</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							We may need to share your personal information in the following
							situations:
						</span>
						<ul>
							<li>
								<span data-custom-class="body_text">
									<strong>Business Transfers.</strong> We may share or transfer
									your information in connection with, or during negotiations
									of, any merger, sale of company assets, financing, or
									acquisition of all or a portion of our business to another
									company.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>Affiliates.</strong> We may share your information
									with our affiliates, in which case we will require those
									affiliates to honor this privacy notice. Affiliates include
									our parent company and any subsidiaries, joint venture
									partners, or other companies that we control or that are under
									common control with us.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>Business Partners.</strong> We may share your
									information with our business partners to offer you certain
									products, services, or promotions.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>Other Users.</strong> When you share personal
									information (for example, by posting comments, contributions,
									or other content to the Services) or otherwise interact with
									public areas of the Services, such personal information may be
									viewed by all users and may be publicly distributed outside
									the Services in perpetuity. If you interact with other users
									of our Services and register for our Services through a social
									network (such as Facebook), your contacts on the social
									network will see your name, profile photo, and descriptions of
									your activity. Similarly, other users will be able to view
									descriptions of your activity, communicate with you within our
									Services, and view your profile.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									<strong>Offer Wall.</strong> Our Services may display a
									third-party hosted &quot;offer wall.&quot; Such an offer wall
									allows third-party advertisers to offer virtual currency,
									gifts, or other items to users in return for the acceptance
									and completion of an advertisement offer. Such an offer wall
									may appear in our Services and be displayed to you based on
									certain data, such as your geographic area or demographic
									information. When you click on an offer wall, you will be
									brought to an external website belonging to other persons and
									will leave our Services. A unique identifier, such as your
									user ID, will be shared with the offer wall provider in order
									to prevent fraud and properly credit your account with the
									relevant reward.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div id="cookies">
						<strong>
							<span data-custom-class="heading_1">
								4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								<em>In Short:</em>
							</strong>{" "}
							<em>
								We may use cookies and other tracking technologies to collect
								and store your information.
							</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							We may use cookies and similar tracking technologies (like web
							beacons and pixels) to access or store information. Specific
							information about how we use such technologies and how you can
							refuse certain cookies is set out in our Cookie Notice: [
							<a href="URL" data-custom-class="link">
								Click Here
							</a>
							].
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div id="sociallogins">
						<strong>
							<span data-custom-class="heading_1">
								5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								<em>In Short:</em>
							</strong>{" "}
							<em>
								If you choose to register or log in to our services using a
								social media account, we may have access to certain information
								about you.
							</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							Our Services offer you the ability to register and log in using
							your third-party social media account details (like your Facebook
							or Twitter logins). Where you choose to do this, we will receive
							certain profile information about you from your social media
							provider. The profile information we receive may vary depending on
							the social media provider concerned, but will often include your
							name, email address, friends list, profile picture as well as
							other information you choose to make public on such a social media
							platform.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							We will use the information we receive only for the purposes that
							are described in this privacy notice or that are otherwise made
							clear to you on the relevant Services. Please note that we do not
							control, and are not responsible for, other uses of your personal
							information by your third-party social media provider. We
							recommend that you review their privacy notice to understand how
							they collect, use, and share your personal information, and how
							you can set your privacy preferences on their sites and apps.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div id="inforetain">
						<strong>
							<span data-custom-class="heading_1">
								6. HOW LONG DO WE KEEP YOUR INFORMATION?
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								<em>In Short:</em>
							</strong>{" "}
							<em>
								We keep your information for as long as necessary to fulfill the
								purposes outlined in this privacy notice unless otherwise
								required by law.
							</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							We will only keep your personal information for as long as it is
							necessary for the purposes set out in this privacy notice, unless
							a longer retention period is required or permitted by law (such as
							tax, accounting, or other legal requirements). No purpose in this
							notice will require us keeping your personal information for
							longer than the period of time in which users have an account with
							us.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							When we have no ongoing legitimate business need to process your
							personal information, we will either delete or anonymize such
							information, or, if this is not possible (for example, because
							your personal information has been stored in backup archives),
							then we will securely store your personal information and isolate
							it from any further processing until deletion is possible.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div id="infosafe">
						<strong>
							<span data-custom-class="heading_1">
								7. HOW DO WE KEEP YOUR INFORMATION SAFE?
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								<em>In Short:</em>
							</strong>{" "}
							<em>
								We aim to protect your personal information through a system of
								organizational and technical security measures.
							</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							We have implemented appropriate technical and organizational
							security measures designed to protect the security of any personal
							information we process. However, despite our safeguards and
							efforts to secure your information, no electronic transmission
							over the Internet or information storage technology can be
							guaranteed to be 100% secure, so we cannot promise or guarantee
							that hackers, cybercriminals, or other unauthorized third parties
							will not be able to defeat our security and improperly collect,
							access, steal, or modify your information. Although we will do our
							best to protect your personal information, transmission of
							personal information to and from our Services is at your own risk.
							You should only access the Services within a secure environment.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div id="privacyrights">
						<strong>
							<span data-custom-class="heading_1">
								8. WHAT ARE YOUR PRIVACY RIGHTS?
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								<em>In Short:</em>
							</strong>{" "}
							<em>
								In some regions, such as the European Economic Area (EEA),
								United Kingdom (UK), and Canada, you have rights that allow you
								greater access to and control over your personal information.
								You may review, change, or terminate your account at any time.
							</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							In some regions (like the EEA, UK, and Canada), you have certain
							rights under applicable data protection laws. These may include
							the right (i) to request access and obtain a copy of your personal
							information, (ii) to request rectification or erasure; (iii) to
							restrict the processing of your personal information; and (iv) if
							applicable, to data portability. In certain circumstances, you may
							also have the right to object to the processing of your personal
							information. To make such a request, please use the{" "}
							<a href="URL" data-custom-class="link">
								contact details
							</a>{" "}
							provided below. We will consider and act upon any request in
							accordance with applicable data protection laws.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							If you are located in the EEA or UK and you believe we are
							unlawfully processing your personal information, you also have the
							right to complain to your local data protection supervisory
							authority. You can find their contact details here:{" "}
							<a
								href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
								target="_blank"
								data-custom-class="link"
								rel="noreferrer"
							>
								https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
							</a>
							.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							If you are located in Switzerland, the contact details for the
							data protection authorities are available here:{" "}
							<a
								href="https://www.edoeb.admin.ch/edoeb/en/home.html"
								target="_blank"
								data-custom-class="link"
								rel="noreferrer"
							>
								https://www.edoeb.admin.ch/edoeb/en/home.html
							</a>
							.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							If you have questions or comments about your privacy rights, you
							may email us at{" "}
							<a href="mailto:privacy@thehotline.org" data-custom-class="link">
								privacy@thehotline.org
							</a>
							.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>Account Information</strong>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							If you would at any time like to review or change the information
							in your account or terminate your account, you can:
						</span>
						<ul>
							<li>
								<span data-custom-class="body_text">
									Log in to your account settings and update your user account.
								</span>
							</li>
							<li>
								<span data-custom-class="body_text">
									Contact us using the contact information provided.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							Upon your request to terminate your account, we will deactivate or
							delete your account and information from our active databases.
							However, we may retain some information in our files to prevent
							fraud, troubleshoot problems, assist with any investigations,
							enforce our legal terms and/or comply with applicable legal
							requirements.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div id="DNT">
						<strong>
							<span data-custom-class="heading_1">
								9. CONTROLS FOR DO-NOT-TRACK FEATURES
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							Most web browsers and some mobile operating systems and mobile
							applications include a Do-Not-Track (&quot;DNT&quot;) feature or
							setting you can activate to signal your privacy preference not to
							have data about your online browsing activities monitored and
							collected. At this stage, no uniform technology standard for
							recognizing and implementing DNT signals has been finalized. As
							such, we do not currently respond to DNT browser signals or any
							other mechanism that automatically communicates your choice not to
							be tracked online. If a standard for online tracking is adopted
							that we must follow in the future, we will inform you about that
							practice in a revised version of this privacy notice.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div id="caresidents">
						<strong>
							<span data-custom-class="heading_1">
								10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								<em>In Short:</em>
							</strong>{" "}
							<em>
								Yes, if you are a resident of California, you are granted
								specific rights regarding access to your personal information.
							</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							California Civil Code Section 1798.83, also known as the
							&quot;Shine The Light&quot; law, permits our users who are
							California residents to request and obtain from us, once a year
							and free of charge, information about categories of personal
							information (if any) we disclosed to third parties for direct
							marketing purposes and the names and addresses of all third
							parties with which we shared personal information in the
							immediately preceding calendar year. If you are a California
							resident and would like to make such a request, please submit your
							request in writing to us using the contact information provided
							below.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							If you are under 18 years of age, reside in California, and have a
							registered account with a Service, you have the right to request
							removal of unwanted data that you publicly post on the Services.
							To request removal of such data, please contact us using the
							contact information provided below, and include the email address
							associated with your account and a statement that you reside in
							California. We will make sure the data is not publicly displayed
							on the Services, but please be aware that the data may not be
							completely or comprehensively removed from all our systems (e.g.,
							backups, etc.).
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div id="policyupdates">
						<strong>
							<span data-custom-class="heading_1">
								11. DO WE MAKE UPDATES TO THIS NOTICE?
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<strong>
								<em>In Short:</em>
							</strong>{" "}
							<em>
								Yes, we will update this notice as necessary to stay compliant
								with relevant laws.
							</em>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							We may update this privacy notice from time to time. The updated
							version will be indicated by an updated &quot;Revised&quot; date
							and the updated version will be effective as soon as it is
							accessible. If we make material changes to this privacy notice, we
							may notify you either by prominently posting a notice of such
							changes or by directly sending you a notification. We encourage
							you to review this privacy notice frequently to be informed of how
							we are protecting your information.
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.heading1}>
					<div id="contact">
						<strong>
							<span data-custom-class="heading_1">
								12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
							</span>
						</strong>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							If you have questions or comments about this notice, you may email
							us at{" "}
							<a href="mailto:privacy@thehotline.org" data-custom-class="link">
								privacy@thehotline.org
							</a>{" "}
							or by post to:
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<span className="question">
								National Domestic Violence Hotline
							</span>
							<br />
							<span className="question">PO Box 90249</span>
							<br />
							<span className="question">Austin, TX 78709</span>
							<br />
							<span className="question">United States</span>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							If you are a resident in the European Economic Area, the
							&quot;data controller&quot; of your personal information is
							National Domestic Violence Hotline. National Domestic Violence
							Hotline has appointed{" "}
							<a href="mailto:privacy@thehotline.org" data-custom-class="link">
								privacy@thehotline.org
							</a>{" "}
							to be its representative in the EEA. You can contact them directly
							regarding the processing of your information by National Domestic
							Violence Hotline, by email at{" "}
							<a href="mailto:privacy@thehotline.org" data-custom-class="link">
								privacy@thehotline.org
							</a>
							, or by post to:
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<span className="question">
								National Domestic Violence Hotline
							</span>
							<br />
							<span className="question">PO Box 90249</span>
							<br />
							<span className="question">Austin, TX 78709</span>
							<br />
							<span className="question">United States</span>
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							If you are a resident in Switzerland, the &quot;data
							controller&quot; of your personal information is National Domestic
							Violence Hotline. National Domestic Violence Hotline has appointed{" "}
							<a href="mailto:privacy@thehotline.org" data-custom-class="link">
								privacy@thehotline.org
							</a>{" "}
							to be its representative in Switzerland. You can contact them
							directly regarding the processing of your information by National
							Domestic Violence Hotline, by email at{" "}
							<a href="mailto:privacy@thehotline.org" data-custom-class="link">
								privacy@thehotline.org
							</a>
							, or by post to:
						</span>
					</div>
				</div>
			</div>

			<div style={{ lineHeight: "1.5" }}>
				<br />
				<div style={styles.bodyText}>
					<div>
						<span data-custom-class="body_text">
							<span className="question">
								National Domestic Violence Hotline
							</span>
							<br />
							<span className="question">PO Box 90249</span>
							<br />
							<span className="question">Austin, TX 78709</span>
							<br />
							<span className="question">United States</span>
						</span>
					</div>
				</div>
			</div>

			<style jsx>{`
        .question {
          color: #595959;
        }
      `}</style>
		</div>
	);
};

export default PrivacyPolicyPage;
