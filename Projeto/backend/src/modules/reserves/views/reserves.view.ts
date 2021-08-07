import { Reserve } from "../infra/entities/Reserve";

export default {
  render(reserve: Reserve) {
    return {
      id: reserve.id,
      apartment_id: reserve.apartment_id,
      user_id: reserve.user_id,
      cpf: reserve.cpf,
      birth_date: reserve.birth_date,
      date_checkin: reserve.date_checkin,
      date_checkout: reserve.date_checkout,
      total: reserve.total,
    };
  },

  renderMany(reserves: Reserve[]) {
    return reserves.map((reserve) => this.render(reserve));
  },
};
