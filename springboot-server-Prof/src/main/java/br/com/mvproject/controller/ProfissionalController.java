package br.com.mvproject.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.mvproject.model.Profissional;
import br.com.mvproject.repository.ProfissionalRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class ProfissionalController {

    @Autowired
    ProfissionalRepository profissionalRepository;
	
	@GetMapping("/profissional")
	public ResponseEntity<List<Profissional>> getAllProfissionais(@RequestParam(required = false) String nome){
		try {
				List<Profissional> profissionais = new ArrayList<Profissional>();
				
				if(nome == null) {
					profissionalRepository.findAll().forEach(profissionais::add);
				}
				
				if(profissionais.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				
				return new ResponseEntity<>(profissionais, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/profissional/{id}")
	public ResponseEntity<Profissional> getProfissionalById(@PathVariable("id") long id){
		Optional<Profissional> profissionalData = profissionalRepository.findById(id);
		
		if(profissionalData.isPresent()) {
			return new ResponseEntity<>(profissionalData.get(), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@PostMapping("/profissional")
	public ResponseEntity<Profissional> createProfissional(@RequestBody Profissional profissional){
		try {
			Profissional _profissional = profissionalRepository
					.save(new Profissional(profissional.getNome(), profissional.getEndereco(), 
							profissional.getTelefone(), profissional.getCelular(), profissional.getFuncao()));
			return new ResponseEntity<>(_profissional, HttpStatus.CREATED);
		}catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/profissional/{id}")
	public ResponseEntity<Profissional> updateProfissional(@PathVariable("id") long id, @RequestBody Profissional profissional){
		Optional<Profissional> profissionalData = profissionalRepository.findById(id);
		
		if(profissionalData.isPresent()) {
			Profissional _profissional = profissionalData.get();
			_profissional.setNome(profissional.getNome());
			_profissional.setEndereco(profissional.getEndereco());
			_profissional.setTelefone(profissional.getTelefone());
			return new ResponseEntity<>(profissionalRepository.save(_profissional), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/profissional/{id}")
	public ResponseEntity<HttpStatus> deleteProfiossional(@PathVariable("id") long id){
		try {
			profissionalRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/profissional")
	public ResponseEntity<HttpStatus> deleteAllProfissionais() {
		try {
			profissionalRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
