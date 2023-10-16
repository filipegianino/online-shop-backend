/* os itens que são numericos e estão como string é porque não existes
por exemplo 01 - o codigo é lido como 1 e ignora o 0 */

export interface CreateUserDto {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
}
