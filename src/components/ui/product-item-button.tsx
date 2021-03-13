import React, { ReactElement } from "react"
import Link from "next/link"

import { getPrice } from "../../utils/utils"
import { getDetailsRoute } from "../../utils/routes"
import { Product } from "../../utils/types"

import { Button } from "./button"

type Props = Product

export const ProductItemButton = ({
	id,
	price,
}: Props): ReactElement => (
	<Link href={getDetailsRoute(id)}>
		<a>
			<Button text={`Buy $${getPrice(price)}`} />
		</a>
	</Link>
)
