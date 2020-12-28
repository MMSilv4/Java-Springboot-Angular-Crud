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

import br.com.mvproject.model.Estabelecimento;
import br.com.mvproject.repository.EstabelecimentoRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class EstabelecimentoController {
	
	@Autowired
	EstabelecimentoRepository estabelecimentoRepository;
	
	@GetMapping("/estabelecimento")
	public ResponseEntity<List<Estabelecimento>> getAllEstabelecimentos(@RequestParam(required = false) String nome){
		try {
				List<Estabelecimento> estabelecimentos = new ArrayList<Estabelecimento>();
				
				if(nome == null) {
					estabelecimentoRepository.findAll().forEach(estabelecimentos::add);
				}else {
					estabelecimentoRepository.findByNome(nome).forEach(estabelecimentos::add);
				}
				
				if(estabelecimentos.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				
				return new ResponseEntity<>(estabelecimentos, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/estabelecimento/{id}")
	public ResponseEntity<Estabelecimento> getEstabelecimentoById(@PathVariable("id") long id){
		Optional<Estabelecimento> estabelecimentoData = estabelecimentoRepository.findById(id);
		
		if(estabelecimentoData.isPresent()) {
			return new ResponseEntity<>(estabelecimentoData.get(), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@PostMapping("/estabelecimento")
	public ResponseEntity<Estabelecimento> createEstabelecimento(@RequestBody Estabelecimento estabelecimento){
		try {
			Estabelecimento _estabelecimento = estabelecimentoRepository
					.save(new Estabelecimento(estabelecimento.getNome(), estabelecimento.getEndereco(), 
							estabelecimento.getTelefone()));
			return new ResponseEntity<>(_estabelecimento, HttpStatus.CREATED);
		}catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/estabelecimento/{id}")
	public ResponseEntity<Estabelecimento> updateEstabelecimento(@PathVariable("id") long id, @RequestBody Estabelecimento estabelecimento){
		Optional<Estabelecimento> estabelecimentoData = estabelecimentoRepository.findById(id);
		
		if(estabelecimentoData.isPresent()) {
			Estabelecimento _estabelecimento = estabelecimentoData.get();
			_estabelecimento.setNome(estabelecimento.getNome());
			_estabelecimento.setEndereco(estabelecimento.getEndereco());
			_estabelecimento.setTelefone(estabelecimento.getTelefone());
			return new ResponseEntity<>(estabelecimentoRepository.save(_estabelecimento), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/estabelecimento/{id}")
	public ResponseEntity<HttpStatus> deleteEstabelecimento(@PathVariable("id") long id){
		try {
			estabelecimentoRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/estabelecimento")
	public ResponseEntity<HttpStatus> deleteAllEstabelecimentos() {
		try {
			estabelecimentoRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	
	
	
	
	
	
	
	

}
