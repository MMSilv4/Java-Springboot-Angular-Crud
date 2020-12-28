package br.com.mvproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.mvproject.model.Estabelecimento;
import java.util.List;


public interface EstabelecimentoRepository extends JpaRepository<Estabelecimento, Long>{
	List<Estabelecimento> findByNome(String nome);	
}
