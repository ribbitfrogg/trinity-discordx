export enum ErrorMessage {
  AlreadyLiked = "Você já deu like nesse personagem.", "You have already liked this character."
  CharacterInvalidImage = "A imagem do(a) seu/sua personagem não é válida.", "The image you chose is not valid."
  CharacterInvalidName = "O nome do(a) seu/sua personagem não é válido.", "The name you chose is not valid."
  CharacterNotCreated = "Seu/sua personagem não pôde ser criado(a).", "Your character could not be created."
  CharacterNotFound = "Seu/sua personagem não pôde ser encontrado(a).", "Your character was not found."
  Color = "Por favor insira uma cor válida. Ela deve conter # no começo e 6 caracteres hexadecimais.", "Insert a valid color. It should contain a # followed by 6 hexadecimal numbers."
  ColorImage = "Por favor insira uma cor válida e uma imagem válida. A cor deve conter # no começo e 6 caracteres hexadecimais. A imagem deve ser um link direto para a imagem.", "Please insert a valid color and image. The color must contain a # followed by 6 hexadecimal numbers. The image must be a direct link."
  DatabaseError = "Ocorreu um erro no banco de dados. Entre no servidor de suporte e reporte o erro se você acreditar que ele é um bug.", "There was an error in the database. Join the support server and report it if you believe it to be a bug."
  FetchError = "Ocorreu um erro ao buscar a mensagem. ", "Could not fetch that message."
  Image = "Por favor insira um link de imagem válido. Ela deve conter http(s):// no começo e terminar com .jpg, .png ou .gif.", "Please insert a valid image link. It should have http(s):// on the start and end with .jpg, .png or .gif."
  Music = "Por favor insira um link do youtube válido.", "Please insert a valid YouTube link."
  NoEditContent = "Você não forneceu um conteúdo para editar a mensagem.", "There was no content to edit the message with."
  NotPostOwner = "Você não é o(a) dono(a) da mensagem ou ela não é elegível para ser deletada. Não é possível deletá-la ou editá-la.", "You are not the owner of that message or it can't be deleted or edited."
  Prefix = "O prefixo do(a) seu/sua personagem já existe em algum outro personagem seu.", "That prefix is already taken by another character of yours."
  UnknownChannel = "Incapaz de encontrar o canal da mensagem. Verifique se o canal ainda existe.", "Could not find the message's channel. Make sure the channel still exists."
  CannotLikeMessage = "Você não pode dar like em uma mensagem.", "You cannot like a message."
  UnknownMessage = "Incapaz de deletar ou editar a mensagem inexistente.", "Cannot delete or edit an inexistent message."
}

export enum Feedback {
  Bite = "**{user} mordeu {target}**\n{target} foi mordido(a) {counter} vezes.", "**{user} bit {target}**\n{target} has been bitten {counter} times."
  CharacterCreated = "Seu/Sua personagem foi criado com sucesso.", "Your character was created successfully."
  CharacterDeleted = "Seu/Sua personagem foi excluído com sucesso.", "Your character was deleted successfully."
  CharacterLiked = "❤️ Você deu uma curtida neste personagem!", "❤️ You liked this character!"
  CharacterUpdateMenu = "Atualizando o(a) personagem de {character} de {user}.", "Updating {character} from {user}."
  CharacterUpdated = "Seu/Sua personagem foi atualizado com sucesso.", "Your character was updated successfully."
  DisplayProfile = "Exibindo perfil do(a) personagem {character} de {user}.", "Showing {character} by {user}."
  Hug = "**{user} abraçou {target}**\n{target} foi abraçado(a) {counter} vezes.", "**{user} hugged {target}**\n{target} has been hugged {counter} times."
  Kiss = "**{user} beijou {target}**\n{target} foi beijado(a) {counter} vezes.", "**{user} kissed {target}**\n{target} has been kissed {counter} times."
  MessageEditted = "Mensagem editada com sucesso.", "Message edited successfully."
  PostDeleted = "Seu post foi excluído com sucesso.", "Your post was deleted successfully."
  PostUpdated = "Seu post foi atualizado com sucesso.", "Your post was updated successfully."
  Punch = "**{user} deu um soco em {target}**\n{target} foi socado(a) {counter} vezes.", "**{user} punched {target}**\n{target} has been punched {counter} times."
  Slap = "**{user} deu um tapa em {target}**\n{target} levou um tapa {counter} vezes.", "**{user} slapped {target}**\n{target} has been slapped {counter} times."
}

export enum CommandInfo {
  Avatar = "Mostra a imagem de perfil de um(a) usuário(a).", "Shows a user's profile image."
  AvatarOption = "Usuário(a) que você deseja ver a imagem de perfil.", "User which profile picture you want to see."
  Create = "Cria um personagem.", "Creates a character."
  Delete = "Delete um post do playcard.", "Deletes a playcard post."
  DeleteCharOption = "Personagem que você deseja deletar.", "Character that you want to delete."
  DeleteMessageOption = "Id da mensagem que você deseja deletar.", "ID of the message you want to delete."
  Edit = "Edita um post do playcard.", "Edits a playcard post."
  EditContent = "Novo conteúdo do Post.", "New post content."
  EditMessageOption = "Id da mensagem que você deseja editar.", "ID of the message you want to delete."
  Interact = "Comandos de interação.", "Interaction commands."
  InteractBite = "Morda um(a) usuário(a).", "Bite a user."
  InteractHug = "Abraça um(a) usuário(a).", "Hug a user."
  InteractKiss = "Beija um(a) usuário(a).", "Kiss a user."
  InteractPunch = "Da um tapa em um(a) usuário(a).", "Punch a user."
  InteractSlap = "Dá um tapa em um(a) usuário(a).", "Slap a user."
  InteractUserOption = "Usuário(a) que você deseja interagir.", "User you want to interact with."
  ManagePlaycard = "Comandos de gerenciamento dos personagens.", "Character management commands."
  Playcard = "Comandos relacionados ao sistema de personagens.", "Character system-related commands."
  Profile = "Mostra o perfil de um personagem.", "Shows a character's profile."
  ProfileCharOption = "Personagem que você deseja ver o perfil.", "Character that you want to see the profile of."
  Update = "Atualiza um personagem.", "Updates a character."
  UpdateCharOption = "Personagem que você deseja atualizar.", "Character that you want to update."
  Help = 'Obtenha a lista de comandos do Trinity.', "Get Trinity's command list."
}

export enum CharEmbedField {
  CreatedAt = "Criado", "Created"
  LetterCount = "Total de Caracteres", "Total characters"
  Likes = "Curtidas", "Likes"
  Music = "Link da música", "Music"
  Name = "Nome", "Name"
  Posts = "Quantia de Posts", "Number of Posts"
  Title = "Título", "Title"
}
export enum HelpEmbed {
  Title = 'Comandos do Trinity', "Trinity's Commands"
  Roleplay = "Para usar seu personagem simplesmente use seu prefixo com um `:` após ele e o texto logo em seguida. É possível utilizar vários personagens em uma mensagem só.\n\nExemplo: `fulano: olá, mundo!`", "To use your character simply use it's prefix with a : after and the content following. You can use multiple characters in one message.\n\nExample: `John: "Hello, world!"`"
  FooterText = "❤️ Um bot feito com muito amor por um desenvolvedor apaixonado por fantasia.", "❤️ A bot made with lots of love by a dev who loves fantasy."
  Color = "#36393e"
}
export enum TrinityModalTitle {
  CreateChar = "Criar Personagem", "Create Character"
  UpdateChar = "Atualizar Personagem", "Update Character"
}
export enum CharModalLabel {
  Color = "Cor", "Color"
  Description = "Descrição", "Description"
  Image = "Imagem", "Image"
  Music = "Música", "Music"
  Name = "Nome", "Name"
  Prefix = "Prefixo", "Prefix"
  Title = "Título", "Title"
  TitleIcon = "Ícone do Título", "Title Icon"
}
export enum CharModalPlaceholder {
  Color = "Cor do personagem em hexadecimal, com o #", "Character's hexadecimal color, starting with #"
  Description = "Descrição do personagem", "Character description"
  Image = "Link da imagem do personagem", "Character's image link"
  Name = "Nome do personagem", "Character name"
  Prefix = "Prefixo do personagem", "Character prefix"
}

export enum CharUpdateModalPlaceholder {
  Color = "A nova cor do personagem em hexadecimal, com o #", "Character's new hexadecimal color, starting with #"
  Description = "Uma nova descrição para o personagem", "Character's new description"
  Image = "Novo link da imagem do personagem", "Character's new image link"
  Music = "Um novo link do youtube para a música", "New YouTube link for music"
  Name = "Nome do personagem a ser atualizado", "Character's new name"
  Prefix = "Prefixo do personagem a ser atualizado", "Character's new prefix"
  Title = "Título do personagem a ser atualizado", "Character's new title"
  TitleIcon = "Link da imagem do título a ser atualizado", "Character's new title image"
}
export enum CharUpdateButtonLabel {
  Color = "Cor do Embed", "Embed Color"
  Description = "Descrição", "Description"
  Image = "Imagem", "Image"
  Music = "Música", "Music"
  Name = "Nome", "Name"
  Prefix = "Prefixo", "Prefix"
  Title = "Título", "Title"
}

export enum CharLikeButton {
  Emoji = "👍", "👍"
  Like = "Curtir", "Like"
}
