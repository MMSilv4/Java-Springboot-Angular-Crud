package br.com.mvproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.mvproject.model.Profissional;
import java.util.List;

public interface ProfissionalRepository extends JpaRepository<Profissional, Long>{
    List<Profissional> findByNome(String nome);
    


}
