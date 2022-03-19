package br.com.apiagencia46.pacote.controller;

import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import br.com.apiagencia46.pacote.exception.ResourceNotFoundException;
import br.com.apiagencia46.pacote.model.Destinos;
import br.com.apiagencia46.pacote.repository.DestinosRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/destinos")
public class DestinosController {

	@Autowired
	private DestinosRepository destinosRepository;
	
	@GetMapping
	public List<Destinos> getAllDestinos() {
		return destinosRepository.findAll();
	}
	
	//create
	@PostMapping
	public Destinos createDestino(@RequestBody Destinos destino) {
		return destinosRepository.save(destino);
	}
	
	//get by id
	@GetMapping("{id}")
	public ResponseEntity<Destinos> getDestinoById(@PathVariable long id) {
		Destinos destino = destinosRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Destino com id " + id + " não existe"));
		return ResponseEntity.ok(destino);
	}
	
	// update
	@PutMapping("{id}")
	public ResponseEntity<Destinos> updateDestino(@PathVariable long id, @RequestBody Destinos destinoDetails) {
		Destinos updateDestino = destinosRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Destino com id " + id + " não existe"));
		
		updateDestino.setNome(destinoDetails.getNome());
		updateDestino.setPais(destinoDetails.getPais());
		updateDestino.setDescricao(destinoDetails.getDescricao());
		updateDestino.setValor(destinoDetails.getValor());
		
		destinosRepository.save(updateDestino);
		
		return ResponseEntity.ok(updateDestino);
	}
	
	// delete
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> deleteDestino(@PathVariable long id) {
		
		Destinos destino = destinosRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Destino com id " + id + " não existe"));
		
		destinosRepository.delete(destino);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
