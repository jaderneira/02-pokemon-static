import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"


export const NavBar = () => {

  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0x 20px',
      backgroundColor: theme?.colors.gray100.value
    }}>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        width={70}
        alt="Pokemon"
        height={70}
      />
      <Text color="white" h2>P</Text>
      <Text color="white" h3>okemon</Text>

      <Spacer css={{ flex: 1 }} />

      <Text color="white">Favorites</Text>
      
    </div>
  )
}